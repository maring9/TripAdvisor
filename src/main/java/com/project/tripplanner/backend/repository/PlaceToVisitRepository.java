package com.project.tripplanner.backend.repository;

import com.project.tripplanner.backend.model.City;
import com.project.tripplanner.backend.model.PlaceToVisit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlaceToVisitRepository extends JpaRepository<PlaceToVisit,Long> {
    List<PlaceToVisit> findByCity(City city);
}
