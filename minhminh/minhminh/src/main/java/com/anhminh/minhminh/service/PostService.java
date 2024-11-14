package com.anhminh.minhminh.service;

import com.anhminh.minhminh.dto.PostDto;
import com.anhminh.minhminh.exception.ResourceNotFoundException;
import com.anhminh.minhminh.mapper.PostMap;
import com.anhminh.minhminh.module.Posts;
import com.anhminh.minhminh.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final PostMap postMap;

    @Autowired
    public PostService(PostRepository postRepository, PostMap postMap) {
        this.postRepository = postRepository;
        this.postMap = postMap;
    }

    public void postUpService(PostDto postDto) {
        Posts posts = postMap.toEntity(postDto);
        postRepository.save(posts);
    }
    public List<PostDto> allPost(Long idUser) {
        List<PostDto> postDtoList = new ArrayList<>();
        List<Posts> postsList = postRepository.findByIdUser(idUser); // Tìm tất cả bài đăng theo userId

        for (Posts posts : postsList) {
            PostDto postDto = postMap.toDto(posts);
            postDtoList.add(postDto);
        }

        return postDtoList;
    }

    public void deletePost(Long id) {
        Optional<Posts> posts = postRepository.findById(id);
        if(posts.isPresent()) {
            postRepository.deleteById(id);
        }
        else throw new ResourceNotFoundException("Bài đăng này không tồn tại!");
    }
    public PostDto findPost(Long id) {
        Optional<Posts> posts = postRepository.findById(id);
        return posts.map(postMap::toDto).orElseThrow(() -> new ResourceNotFoundException("Post này còn ko tồn tại!"));
    }

    public Page<Posts> getRecentPosts(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);  // Tạo Pageable đúng
        return postRepository.findAllByOrderByIdPostDesc(pageable);
    }
}
