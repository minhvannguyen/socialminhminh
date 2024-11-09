package com.anhminh.minhminh.mapper;

import com.anhminh.minhminh.dto.PostDto;
import com.anhminh.minhminh.module.Posts;
import org.springframework.stereotype.Component;

@Component
public class PostMap {
    public Posts toEntity(PostDto postDto) {
        Posts posts = new Posts();
        posts.setIdPost(postDto.getIdPost());
        posts.setContent(postDto.getContent());
        posts.setDate(postDto.getDate());
        posts.setIdUser(postDto.getIdUser());
        posts.setImageUrl(postDto.getImageUrl());
        posts.setCommentNumbers(postDto.getCommentNumbers());
        posts.setLikeNumbers(postDto.getLikeNumbers());
        return posts;
    }
    public PostDto toDto(Posts post) {
        PostDto postDto = new PostDto();
        postDto.setIdPost(post.getIdPost());
        postDto.setContent(post.getContent());
        postDto.setDate(post.getDate());
        postDto.setIdUser(post.getIdUser());
        postDto.setImageUrl(post.getImageUrl());
        postDto.setCommentNumbers(post.getCommentNumbers());
        postDto.setLikeNumbers(post.getLikeNumbers());

        return postDto;
    }
}
