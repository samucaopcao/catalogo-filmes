package com.devsuperior.catalogofilmes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.catalogofilmes.entities.Score;
import com.devsuperior.catalogofilmes.entities.ScorePk;
import com.devsuperior.catalogofilmes.entities.User;

public interface UserRepository extends JpaRepository<User , Long> {

	User findByEmail(String email);
}
