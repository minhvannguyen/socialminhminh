package com.anhminh.minhminh.repository;
import com.anhminh.minhminh.module.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Users, Long>{
    boolean existsByGmail(String gmail);
    Users findByGmail(String gmail);
    Users findByIdUser(Long idUser);

    Optional<Users> findByName(String name);

}



