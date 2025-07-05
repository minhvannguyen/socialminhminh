package com.anhminh.minhminh.module.message;

import com.anhminh.minhminh.module.Users;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "conversation")
public class Conversation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // conversationId, khóa chính
    private String name; // Tên cuộc hội thoại (có thể là tên nhóm trong trường hợp nhóm)
    private boolean isPrivate;

    public boolean isPrivate() {
        return isPrivate;
    }

    public void setPrivate(boolean aPrivate) {
        isPrivate = aPrivate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}

