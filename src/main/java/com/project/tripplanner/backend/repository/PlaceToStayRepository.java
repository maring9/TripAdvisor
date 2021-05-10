package com.project.tripplanner.backend.repository;

import com.project.tripplanner.backend.model.PlaceToStay;
import com.project.tripplanner.backend.model.PlaceToVisit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaceToStayRepository extends JpaRepository<PlaceToStay,Long> {
    List<PlaceToStay> findByCityName(String cityName);

}
