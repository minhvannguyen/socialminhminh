package com.anhminh.minhminh.mapper;

import com.anhminh.minhminh.dto.messageDto.ConversationDto;
import com.anhminh.minhminh.dto.messageDto.MessageDto;
import com.anhminh.minhminh.module.message.Message;
import com.anhminh.minhminh.module.Users;
import com.anhminh.minhminh.repository.UserRepository;
import com.anhminh.minhminh.dto.ResponseWebSocket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class MessageMapper {
    private final UserRepository userRepository;

    @Autowired
    public MessageMapper(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public MessageDto toDto(Message message) {
        MessageDto messageDto = new MessageDto();

        messageDto.setId(message.getId());
        messageDto.setContent(message.getContent());
        messageDto.setTime(message.getTime());
        messageDto.setIdSender(message.getIdSender());
        messageDto.setIdConversation(message.getIdConversation());

        return messageDto;
    }

    public Message toEntity(MessageDto messageDto) {
        Message message = new Message();

        message.setContent(messageDto.getContent());
        message.setTime(messageDto.getTime());
        message.setIdSender(messageDto.getIdSender());
        message.setIdConversation(messageDto.getIdConversation());

        return message;
    }

    public ResponseWebSocket toResponseWebsocket(Message message) {
        ResponseWebSocket responseWebSocket = new ResponseWebSocket();

        responseWebSocket.setContent(message.getContent());
        responseWebSocket.setTime(message.getTime());
        responseWebSocket.setIdSender(message.getIdSender());
        responseWebSocket.setIdConversation(message.getIdConversation());
        responseWebSocket.setId(message.getId());
        // Fetch user details using JPA
        Optional<Users> optionalUser = userRepository.findById(message.getIdSender());
        if (optionalUser.isPresent()) {
            Users user = optionalUser.get();
            responseWebSocket.setAvatar(user.getAvatar());
            responseWebSocket.setUserName(user.getName());
        } else {
            // Handle case where user is not found
            responseWebSocket.setAvatar("default-avatar.png");
            responseWebSocket.setUserName("Unknown User");
        }

        return responseWebSocket;
    }

    public ConversationDto toConversationDto(Message message, Long idClient) {
        ConversationDto conversationDto = new ConversationDto();

        conversationDto.setIdConversation(message.getIdConversation());
        conversationDto.setIdUser(idClient);
        conversationDto.setContent(message.getContent());
        conversationDto.setIdMessage(message.getId());
        // Fetch user details using JPA
        Optional<Users> optionalUser = userRepository.findById(idClient);
        if (optionalUser.isPresent()) {
            Users user = optionalUser.get();
            conversationDto.setAvatar(user.getAvatar());
            conversationDto.setUserName(user.getName());
        } else {
            // Handle case where user is not found
            conversationDto.setAvatar("default-avatar.png");
            conversationDto.setUserName("Unknown User");
        }

        return conversationDto;
    }



}

