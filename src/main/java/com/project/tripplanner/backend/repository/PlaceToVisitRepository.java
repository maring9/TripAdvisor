package com.project.tripplanner.backend.repository;

import com.project.tripplanner.backend.model.City;
import com.project.tripplanner.backend.model.PlaceToVisit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaceToVisitRepository extends JpaRepository<PlaceToVisit,Long> {
    List<PlaceToVisit> findByCity(City city);
    List<PlaceToVisit> findByCityId(long cityId);

    List<PlaceToVisit> findByCityName(String cityName);

    PlaceToVisit findByTitle(String title);

}
