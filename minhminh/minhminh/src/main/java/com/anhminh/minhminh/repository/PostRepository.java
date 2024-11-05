package com.anhminh.minhminh.repository;

import com.anhminh.minhminh.module.Posts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Posts, Long> {

}
