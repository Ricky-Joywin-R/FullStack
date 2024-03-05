package com.eventhub.ricky.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eventhub.ricky.model.Theme;


@Repository
public interface ThemeRepository extends JpaRepository<Theme, Integer> {

}