package com.anhminh.minhminh.dto;

import java.security.Timestamp;

public class MessageDto {
    private Long id;
    private String content;
    private String timestamp;
    private String senderUsername;
    private String receiverUsername;

    // Constructors
    public MessageDto() {}

    public MessageDto(Long id, String content, String timestamp, String senderUsername, String receiverUsername) {
        this.id = id;
        this.content = content;
        this.timestamp = timestamp;
        this.senderUsername = senderUsername;
        this.receiverUsername = receiverUsername;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public String getSenderUsername() {
        return senderUsername;
    }

    public void setSenderUsername(String senderUsername) {
        this.senderUsername = senderUsername;
    }

    public String getReceiverUsername() {
        return receiverUsername;
    }

    public void setReceiverUsername(String receiverUsername) {
        this.receiverUsername = receiverUsername;
    }
}
