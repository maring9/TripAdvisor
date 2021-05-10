package com.project.tripplanner.backend.repository;

import com.project.tripplanner.backend.model.PlaceToStay;
import com.project.tripplanner.backend.model.PlaceToVisit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlaceToStayRepository extends JpaRepository<PlaceToStay,Long> {
    List<PlaceToStay> findPlacesByCityName(String cityName);

}
