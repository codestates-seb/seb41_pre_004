package com.preproject.backend.domain.member.repository;

import com.preproject.backend.domain.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Integer> {
    Optional<Member> findByEmail(String email);

    Optional<Member> findByPassword(String password);
}
