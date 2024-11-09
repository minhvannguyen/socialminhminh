package com.anhminh.minhminh.controller;

import com.anhminh.minhminh.dto.PostDto;import com.anhminh.minhminh.service.PostService;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.io.IOException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@RestController
@RequestMapping("/posts")
public class PostController {
    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }
    @GetMapping("/allPost/{idUser}")
    public ResponseEntity<Object> getAllPost(@PathVariable Long idUser) {

        return ResponseEntity.ok(postService.allPost(idUser));
    }

    @Value("${file.upload-dir}")
    private String uploadDir;

    @PostMapping("/up")
    public ResponseEntity<Object> postUp( @RequestParam("postDto") String postDtoJson, @RequestParam("imgfile") MultipartFile file) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            PostDto postDto = objectMapper.readValue(postDtoJson, PostDto.class);

            // Tạo thư mục nếu chưa tồn tại
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            String fileName = System.currentTimeMillis() + "-" + file.getOriginalFilename();
            Path filePath = Paths.get(uploadDir).resolve(fileName);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
            String fileUrl = "http://localhost:8080/uploads/images/" + fileName;
            postDto.setImageUrl(fileUrl);

            postService.postUpService(postDto);
            return ResponseEntity.ok("Đăng bài thành công!");
        } catch (IOException | java.io.IOException e) {
            e.printStackTrace(); // In chi tiết lỗi vào console
            System.err.println("Không thể chuyển đổi JSON thành PostDto: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Có lỗi xảy ra khi tải ảnh lên.");
        }
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
