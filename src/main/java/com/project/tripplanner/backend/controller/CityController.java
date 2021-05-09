package com.project.tripplanner.backend.controller;

import com.project.tripplanner.backend.model.City;
import com.project.tripplanner.backend.repository.CityRepository;
import com.project.tripplanner.backend.repository.PlaceToVisitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class CityController {
    private final CityRepository cityRepository;
    private final PlaceToVisitRepository placeToVisitRepository;

    @Autowired
    public CityController(CityRepository cityRepository,PlaceToVisitRepository placeToVisitRepository){
        this.cityRepository = cityRepository;
        this.placeToVisitRepository = placeToVisitRepository;
    }

    @GetMapping("/search_city/{name}")
    public boolean searchForCity(@PathVariable String name){
        return cityRepository.findByName(name);
    }


}
