package com.project.tripplanner.backend.repository;

import com.project.tripplanner.backend.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<City,Long> {
    
}
