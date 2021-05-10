package com.project.tripplanner.backend.repository;

import com.project.tripplanner.backend.model.PlaceToEat;
import com.project.tripplanner.backend.model.PlaceToStay;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlaceToEatRepository extends JpaRepository<PlaceToEat,Long> {
    List<PlaceToEat> findPlacesByCityName(String cityName);
}
