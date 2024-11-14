package com.anhminh.minhminh.service;

import com.anhminh.minhminh.dto.MessageDto;
import com.anhminh.minhminh.mapper.MessageMapper;
import com.anhminh.minhminh.module.Message;
import com.anhminh.minhminh.module.Users;
import com.anhminh.minhminh.repository.MessageRepository;
import com.anhminh.minhminh.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MessageService {

    private final MessageRepository messageRepository;
    private final UserRepository userRepository;
    private final MessageMapper messageMapper;

    public MessageService(MessageRepository messageRepository, UserRepository userRepository, MessageMapper messageMapper) {
        this.messageRepository = messageRepository;
        this.userRepository = userRepository;
        this.messageMapper = messageMapper;
    }

    public MessageDto saveMessage(MessageDto messageDto) {
        Users sender = userRepository.findByUserName(messageDto.getSenderUsername())
                .orElseThrow(() -> new RuntimeException("Sender not found"));
        Users receiver = userRepository.findByUserName(messageDto.getReceiverUsername())
                .orElseThrow(() -> new RuntimeException("Receiver not found"));

        Message message = messageMapper.toEntity(messageDto, sender, receiver);
        Message savedMessage = messageRepository.save(message);
        return messageMapper.toDto(savedMessage);
    }

    public List<MessageDto> getConversation(String senderUsername, String receiverUsername) {
        Users sender = userRepository.findByUserName(senderUsername)
                .orElseThrow(() -> new RuntimeException("Sender not found"));
        Users receiver = userRepository.findByUserName(receiverUsername)
                .orElseThrow(() -> new RuntimeException("Receiver not found"));

        List<Message> messages = messageRepository.findBySenderIdAndReceiverId(sender.getId(), receiver.getId());
        return messages.stream().map(messageMapper::toDto).collect(Collectors.toList());
    }
}

