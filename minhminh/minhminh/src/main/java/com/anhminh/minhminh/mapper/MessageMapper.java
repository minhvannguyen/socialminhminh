package com.anhminh.minhminh.mapper;

import com.anhminh.minhminh.dto.MessageDto;
import com.anhminh.minhminh.module.Message;
import com.anhminh.minhminh.module.Users;
import org.springframework.stereotype.Component;

import java.security.Timestamp;

@Component
public class MessageMapper {

    public MessageDto toDto(Message message) {
        return new MessageDto(
                message.getId(),
                message.getContent(),
                message.getTimestamp(),
                message.getSender().getUserName(),
                message.getReceiver().getUserName()
        );
    }

    public Message toEntity(MessageDto messageDto, Users sender, Users receiver) {
        Message message = new Message();
        message.setContent(messageDto.getContent());
        message.setTimestamp(messageDto.getTimestamp());
        message.setSender(sender);
        message.setReceiver(receiver);
        return message;
    }
}

