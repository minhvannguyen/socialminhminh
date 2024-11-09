package com.anhminh.minhminh.repository;

import com.anhminh.minhminh.module.Posts;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Posts, Long> {
    List<Posts> findByIdUser(Long idUser); // Tìm tất cả bài đăng theo userId
}
