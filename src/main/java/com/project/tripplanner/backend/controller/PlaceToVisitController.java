package com.project.tripplanner.backend.controller;

//import com.google.api.Http;
import com.project.tripplanner.backend.model.PlaceToVisit;
import com.project.tripplanner.backend.repository.PlaceToVisitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class PlaceToVisitController {

    @Autowired
    private PlaceToVisitRepository placeToVisitRepository;

    @GetMapping("/places_to_visit")
    public ResponseEntity<List<PlaceToVisit>> getAllPlacesToVisit(@RequestParam(required = false) String title){
        try{
            List<PlaceToVisit> places = new ArrayList<>();

            places.addAll(placeToVisitRepository.findAll());

            if(places.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(places,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/places_to_visit")
    public ResponseEntity<PlaceToVisit> createPlace(@RequestBody PlaceToVisit place){
        try{
            PlaceToVisit placeToVisit = placeToVisitRepository.save(new PlaceToVisit(place.getTitle(),place.getDescription()));
            return new ResponseEntity<>(placeToVisit,HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }



}
