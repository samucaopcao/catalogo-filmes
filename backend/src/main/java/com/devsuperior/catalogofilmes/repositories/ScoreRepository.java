package com.devsuperior.catalogofilmes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.catalogofilmes.entities.Score;
import com.devsuperior.catalogofilmes.entities.ScorePk;

public interface ScoreRepository extends JpaRepository<Score , ScorePk> {

	
}
