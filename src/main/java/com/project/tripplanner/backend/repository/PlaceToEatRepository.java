package com.project.tripplanner.backend.repository;

import com.project.tripplanner.backend.model.PlaceToEat;
import com.project.tripplanner.backend.model.PlaceToStay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaceToEatRepository extends JpaRepository<PlaceToEat,Long> {

    List<PlaceToEat> findByCityName(String cityName);
}
