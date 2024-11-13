package com.anhminh.minhminh.controller;

import com.anhminh.minhminh.dto.FollowersDto;
import com.anhminh.minhminh.dto.TymDto;
import com.anhminh.minhminh.service.Tymserver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tym")
public class TymController {
    private  final Tymserver tymserver;

    @Autowired
    public TymController(Tymserver tymserver) {
        this.tymserver = tymserver;
    }

    @PostMapping
    public ResponseEntity<String> tymed(@RequestBody TymDto tymDto) {
        tymserver.tymServer(tymDto);
        return ResponseEntity.ok("Đã tym!");
    }

    @DeleteMapping("/unTym")
    public ResponseEntity<String> unTym(@RequestBody TymDto tymDto) {
        return tymserver.delTymServer(tymDto);
    }

    @GetMapping("/numberTym/{id}")
    public ResponseEntity<Integer> numberTym(@PathVariable Long id) {
        return ResponseEntity.ok(tymserver.numberTyms(id));
    }
    @PostMapping("/isTym")
    public ResponseEntity<Boolean> isTym(@RequestBody TymDto tymDto) {
        return ResponseEntity.ok(tymserver.isTymService(tymDto));
    }
}
