package com.anhminh.minhminh.controller;

import com.anhminh.minhminh.annotation.OnRegister;
import com.anhminh.minhminh.annotation.OnUpdate;
import com.anhminh.minhminh.dto.UserDto;
import com.anhminh.minhminh.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserControl {
    private final UserService userService;

    @Autowired
    public UserControl(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<String> registerUser(@Validated(OnRegister.class) @RequestBody UserDto userDto) {
        userService.registerUser(userDto);
        return ResponseEntity.ok("Đăng ký thành công!");
    }

    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers() {
        return ResponseEntity.ok(userService.allUser());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDto> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findUser(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@Validated(OnUpdate.class) @RequestBody UserDto userDto, @PathVariable Long id) {
        userService.updateUser(userDto, id);
        return ResponseEntity.ok("Cập nhật thành công!");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok("Xoá thành công!");
    }
}
