package com.anhminh.minhminh.repository;

import com.anhminh.minhminh.module.message.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository public interface MessageRepository extends JpaRepository<Message, Long> {
    Page<Message> findByIdConversation(Long idConversation, Pageable pageable);

    @Query(value = """
    SELECT * FROM message
    WHERE id_conversation = :idConversation
    ORDER BY time DESC
    LIMIT 1
""", nativeQuery = true)
    Message findLatestMessageByIdConversation(@Param("idConversation") Long conversationId);

}
