package com.anhminh.minhminh.service;

import com.anhminh.minhminh.dto.FollowersDto;
import com.anhminh.minhminh.dto.TymDto;
import com.anhminh.minhminh.mapper.TymMap;
import com.anhminh.minhminh.module.Followers;
import com.anhminh.minhminh.module.Tyms;
import com.anhminh.minhminh.repository.TymRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Tymserver {
    private  final TymRepository tymRepository;
    private  final TymMap tymMap;

    @Autowired
    public Tymserver(TymRepository tymRepository, TymMap tymMap) {
        this.tymRepository = tymRepository;
        this.tymMap = tymMap;
    }

    public ResponseEntity<String> tymServer (TymDto tymDto) {
        Optional<Tyms> tyms = tymRepository.findByIdPostAndIdUser(tymDto.getIdPost(), tymDto.getIdUser());
        if(tyms.isPresent()) {
            return ResponseEntity.ok("Đã tym!");
        }
        else {
            Tyms tym = tymMap.toEntity(tymDto);
            tymRepository.save(tym);
            return ResponseEntity.ok("Đã tym!");
        }


    }

    public ResponseEntity<String> delTymServer(TymDto tymDto) {
        Optional<Tyms> tyms = tymRepository.findByIdPostAndIdUser(tymDto.getIdPost(), tymDto.getIdUser());
        if(tyms.isPresent()) {
            tymRepository.deleteById(tyms.get().getIdTym());
            return ResponseEntity.ok("Đã hủy tym thành công!");
        }
        else return ResponseEntity.ok("Tym này vốn dĩ đã trống!");

    }
    public int numberTyms(Long id) {
        List<Tyms> tyms = tymRepository.findAllByIdPost(id);
        return tyms.size();
    }
    public boolean isTymService(TymDto tymDto) {
        Optional<Tyms> tym = tymRepository.findByIdPostAndIdUser(tymDto.getIdPost(), tymDto.getIdUser());
        return tym.isPresent();
    }
}
