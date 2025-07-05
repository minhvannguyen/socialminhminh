package com.anhminh.minhminh.service.messageserver;

import com.anhminh.minhminh.dto.messageDto.ConversationDto;
import com.anhminh.minhminh.dto.messageDto.MessageDto;
import com.anhminh.minhminh.dto.ResponseWebSocket;
import com.anhminh.minhminh.exception.ResourceNotFoundException;
import com.anhminh.minhminh.mapper.MessageMapper;
import com.anhminh.minhminh.module.message.Conversation;
import com.anhminh.minhminh.module.message.Message;
import com.anhminh.minhminh.repository.ConversationRepository;
import com.anhminh.minhminh.repository.MessageRepository;
import com.anhminh.minhminh.repository.UserConversationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class MessageService {

    private final MessageMapper messageMapper;
    private final MessageRepository messageRepository;
    private final UserConversationRepository userConversationRepository;
    private final ConversationRepository conversationRepository;

    @Autowired
    public MessageService(MessageMapper messageMapper, MessageRepository messageRepository, UserConversationRepository userConversationRepository, ConversationRepository conversationRepository) {
        this.messageMapper = messageMapper;
        this.messageRepository = messageRepository;
        this.userConversationRepository = userConversationRepository;
        this.conversationRepository = conversationRepository;
    }

    public void saveMessage(MessageDto messageDto) {
        Message message = messageMapper.toEntity(messageDto);
        messageRepository.save(message);
    }

    public List<ResponseWebSocket> getMessagesByConversation(Long idConversation, int page, int size) {
        // Tạo Pageable với thông tin phân trang và sắp xếp
        Pageable pageable = PageRequest.of(page, size, Sort.by("time").descending()
        );

        // Truy vấn danh sách tin nhắn thuộc conversationId với phân trang
        Page<Message> messagePage = messageRepository.findByIdConversation(idConversation, pageable);

        // Chuyển đổi danh sách Message thành ds ReponseWebsocket
        return messagePage.getContent().stream()
                .map(messageMapper::toResponseWebsocket) // Dùng method reference
                .toList();
    }

    public void deleteMessage(Long id) {
        Optional<Message> message = messageRepository.findById(id);
        if(message.isPresent()) {
            messageRepository.deleteById(id);
        }
        else throw new ResourceNotFoundException("tin nhắn này không tồn tại!");
    }

    public Page<ConversationDto> getConversationsWithOtherUsers(Long loggedInUserId, Pageable pageable) {
        // Truy vấn phân trang danh sách conversation mà user đang login tham gia
        Page<Conversation> conversations = conversationRepository.findAllByUserId(loggedInUserId, pageable);

        // Chuyển đổi từng Conversation sang ConversationDto
        List<ConversationDto> conversationDtoList = conversations.getContent().stream().map(conversation -> {

            // Lấy tin nhắn cuối cùng
            Message message = messageRepository.findLatestMessageByIdConversation(conversation.getId());

            if (message == null) {
                return null; // hoặc return một ConversationDto trống/placeholder tùy yêu cầu
            }
            // Lấy id user client
            Long idClient = userConversationRepository.findSingleUserExcluding(conversation.getId(), loggedInUserId);
            // Chuyển đổi sang ResponseWebSocket
            return messageMapper.toConversationDto(message, idClient);
        }).filter(Objects::nonNull) .toList();

        // Trả về đối tượng Page với danh sách đã chuyển đổi
        return new PageImpl<>(conversationDtoList, pageable, conversations.getTotalElements());
    }

    // search conversation
    

}

