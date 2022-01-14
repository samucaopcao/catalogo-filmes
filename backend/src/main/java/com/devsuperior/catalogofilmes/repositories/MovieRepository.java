package com.devsuperior.catalogofilmes.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.catalogofilmes.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
