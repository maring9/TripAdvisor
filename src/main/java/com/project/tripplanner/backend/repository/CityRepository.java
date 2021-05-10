package com.project.tripplanner.backend.repository;

import com.project.tripplanner.backend.model.City;
import com.project.tripplanner.backend.model.PlaceToVisit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepository extends JpaRepository<City,Long> {
    City findByName(String name);
}
