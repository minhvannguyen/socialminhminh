package com.anhminh.minhminh.controller;

import com.anhminh.minhminh.dto.PostDto;
import com.anhminh.minhminh.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/posts")
public class PostController {
    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("/up")
    public ResponseEntity<Object> postUp( @RequestBody PostDto postDto) {
        postService.postUpService(postDto);
        return ResponseEntity.ok("Đăng bài thành công!");
    }

    @GetMapping
    public ResponseEntity<Object> getAllPost() {

        return ResponseEntity.ok(postService.allPost());
    }


    @GetMapping("/{id}")
    public ResponseEntity<Object> getPost(@PathVariable Long id) {

        return ResponseEntity.ok(postService.findPost(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePost(@PathVariable Long id) {

        postService.deletePost(id);
        return ResponseEntity.ok("Xoá thành công!");
    }
}
