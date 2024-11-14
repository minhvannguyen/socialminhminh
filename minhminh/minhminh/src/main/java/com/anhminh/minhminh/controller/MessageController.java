package com.anhminh.minhminh.controller;

import com.anhminh.minhminh.dto.MessageDto;
import com.anhminh.minhminh.service.MessageService;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
public class MessageController {

    private final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    // API để gửi tin nhắn
    @MessageMapping("/sendMessage")
    @SendTo("/topic/messages")
    public MessageDto sendMessage(MessageDto messageDto) {
        return messageService.saveMessage(messageDto);
    }

    // API để lấy danh sách tin nhắn giữa hai người
    @GetMapping("/messages")
    public List<MessageDto> getConversation(@RequestParam String senderUsername, @RequestParam String receiverUsername) {
        return messageService.getConversation(senderUsername, receiverUsername);
    }
}

