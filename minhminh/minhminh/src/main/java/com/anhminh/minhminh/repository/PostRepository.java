package com.anhminh.minhminh.repository;

import com.anhminh.minhminh.module.Posts;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.domain.Pageable;
import java.util.List;

public interface PostRepository extends JpaRepository<Posts, Long> {
    List<Posts> findByUser_IdUser(Long userId);
    // Tìm tất cả bài đăng theo userId
    Page<Posts> findAllByOrderByIdPostDesc(Pageable pageable);
}
