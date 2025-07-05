package com.anhminh.minhminh.repository;

import com.anhminh.minhminh.module.message.Conversation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ConversationRepository extends JpaRepository<Conversation, Long> {
    @Query(value = """
    SELECT c.* FROM conversation c
    JOIN user_conversation uc on c.id = uc.id_Conversation
    WHERE uc.id_user = :userId
    """, nativeQuery = true)
    Page<Conversation> findAllByUserId(@Param("userId") Long userId, Pageable pageable);

    @Query(value = """
    SELECT uc.id_conversation
    FROM user_conversation uc
    WHERE uc.id_user IN (:userId, :clientId)
    GROUP BY uc.id_conversation
    HAVING COUNT(DISTINCT uc.id_user) = 2
    LIMIT 1
    """, nativeQuery = true)
    Long findConversationByUserIdAndClientId(@Param("userId") Long userId, @Param("clientId") Long clientId);

}

