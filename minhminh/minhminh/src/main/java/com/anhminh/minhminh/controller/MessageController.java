package com.anhminh.minhminh.controller;

import com.anhminh.minhminh.dto.messageDto.ConversationDto;
import com.anhminh.minhminh.dto.messageDto.MessageDto;
import com.anhminh.minhminh.mapper.MessageMapper;
import com.anhminh.minhminh.module.Users;
import com.anhminh.minhminh.module.message.Conversation;
import com.anhminh.minhminh.module.message.Message;
import com.anhminh.minhminh.module.message.UserConversation;
import com.anhminh.minhminh.repository.ConversationRepository;
import com.anhminh.minhminh.repository.UserConversationRepository;
import com.anhminh.minhminh.repository.UserRepository;
import com.anhminh.minhminh.service.messageserver.MessageService;
import com.anhminh.minhminh.dto.ResponseWebSocket;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
public class MessageController {

    private final MessageService messageService;
    private final ConversationRepository conversationRepository;
    private final UserConversationRepository userConversationRepository;
    private final SimpMessagingTemplate messagingTemplate;
    private final MessageMapper messageMapper;
    private final UserRepository userRepository;



    public MessageController(MessageService messageService, ConversationRepository conversationRepository, UserConversationRepository userConversationRepository, MessageMapper messageMapper,
                             SimpMessagingTemplate messagingTemplate, UserRepository userRepository) {
        this.messageService = messageService;
        this.conversationRepository = conversationRepository;
        this.userConversationRepository = userConversationRepository;
        this.messageMapper = messageMapper;
        this.messagingTemplate = messagingTemplate;
        this.userRepository = userRepository;
    }

    // API để gửi tin nhắn
    @MessageMapping("/sendMessage")
    public void sendMessage(@Payload MessageDto messageDto, Principal principal) {

        // ✅ Tạo hoặc tìm conversation
        if (messageDto.getIdConversation() == null)
        {
            Long idConversation = conversationRepository.findConversationByUserIdAndClientId(
                    messageDto.getIdSender(), messageDto.getIdClient());

            if (idConversation == null) {
                Conversation conversation = new Conversation();
                conversation.setPrivate(true);
                conversationRepository.save(conversation);
                messageDto.setIdConversation(conversation.getId());

                userConversationRepository.save(new UserConversation(conversation.getId(), messageDto.getIdSender()));
                userConversationRepository.save(new UserConversation(conversation.getId(), messageDto.getIdClient()));
            } else {
                messageDto.setIdConversation(idConversation);
            }
        }
        // ✅ Lưu message
        messageService.saveMessage(messageDto);

        // ✅ Gửi tin nhắn tới client nhận
        Message message = messageMapper.toEntity(messageDto);
        ResponseWebSocket response = messageMapper.toResponseWebsocket(message);

        Users sender = userRepository.findByIdUser(messageDto.getIdSender());
        Users receiver = userRepository.findByIdUser(messageDto.getIdClient());

                    String receiverUsername = receiver.getGmail(); // 👈 phải khớp với principal.getName() khi receiver kết nối WebSocket
                    String senderUsername = sender.getGmail();

                    System.out.println("👤 Gửi tới: " + senderUsername);
                    messagingTemplate.convertAndSendToUser(senderUsername, "/queue/messages", response);
                    System.out.println("👤 Gửi tới: " + receiverUsername);
                    messagingTemplate.convertAndSendToUser(receiverUsername, "/queue/messages", response);
    }


    // API để lấy danh sách tin nhắn giữa hai người
    @GetMapping("/allMessages")
    public ResponseEntity<List<ResponseWebSocket>> getMessagesByConversation(
            @RequestParam Long userId,
            @RequestParam Long clientId,
            @RequestParam(defaultValue = "0") int page, // Trang mặc định là 0
            @RequestParam(defaultValue = "20") int size) { // Số tin nhắn mặc định mỗi trang là 20
        Long conversationId = conversationRepository.findConversationByUserIdAndClientId(userId, clientId);
        List<ResponseWebSocket> messages = messageService.getMessagesByConversation(conversationId, page, size);
        return ResponseEntity.ok(messages);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMessage(@PathVariable Long id) {

        messageService.deleteMessage(id);
        return ResponseEntity.ok("Xoá thành công!");
    }

    @GetMapping("/allConversation")
    public ResponseEntity<Page<ConversationDto>> getConversations(
            @RequestParam Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        Page<ConversationDto> conversations = messageService.getConversationsWithOtherUsers(
                userId, PageRequest.of(page, size));
        return ResponseEntity.ok(conversations);
    }

    @GetMapping("/searchConversation")
    public Long searchConversation(@RequestParam Long userId, @RequestParam Long clientId) {
       return conversationRepository.findConversationByUserIdAndClientId(userId, clientId);
    }


}

