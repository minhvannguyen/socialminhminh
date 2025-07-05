package com.anhminh.minhminh.repository;

import com.anhminh.minhminh.module.message.UserConversation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserConversationRepository extends JpaRepository<UserConversation, Long> {
    @Query(value = """
    SELECT m.id_user
    FROM user_conversation m
    WHERE m.id_conversation = :conversationId AND m.id_user != :userId
    LIMIT 1
""", nativeQuery = true)
    Long findSingleUserExcluding(@Param("conversationId") Long conversationId,
                                 @Param("userId") Long userId);


}
