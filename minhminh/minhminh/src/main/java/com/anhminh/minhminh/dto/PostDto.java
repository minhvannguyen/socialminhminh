package com.anhminh.minhminh.dto;

import com.anhminh.minhminh.module.Posts;

public class PostDto {
    private Long idPost;
    private Long idUser;
    private String content;
    private String imageUrl;
    private String date;
    private int likeNumbers;
    private int commentNumbers;

    public PostDto(Posts post) {
        this.setIdPost(post.getIdPost());
        this.setContent(post.getContent());
        this.setDate(post.getDate());
        this.setIdUser(post.getIdUser());
        this.setImageUrl(post.getImageUrl());
        this.setCommentNumbers(post.getCommentNumbers());
        this.setLikeNumbers(post.getLikeNumbers());

    }

    public PostDto() {
    }

    public int getCommentNumbers() {
        return commentNumbers;
    }

    public void setCommentNumbers(int commentNumbers) {
        this.commentNumbers = commentNumbers;
    }

    public int getLikeNumbers() {
        return likeNumbers;
    }

    public void setLikeNumbers(int likeNumbers) {
        this.likeNumbers = likeNumbers;
    }

    public Long getIdPost() {
        return idPost;
    }

    public void setIdPost(Long idPost) {
        this.idPost = idPost;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
