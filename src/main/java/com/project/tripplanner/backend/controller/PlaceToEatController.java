package com.project.tripplanner.backend.controller;

import com.project.tripplanner.backend.model.PlaceToEat;
import com.project.tripplanner.backend.model.PlaceToStay;
import com.project.tripplanner.backend.repository.PlaceToEatRepository;
import com.project.tripplanner.backend.repository.PlaceToStayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class PlaceToEatController {
    @Autowired
    private PlaceToEatRepository placeToEatRepository;

    @GetMapping(value = "/places_to_eat")
    public ResponseEntity<List<PlaceToEat>> getAllPlacesToEat(){
        try{
            List<PlaceToEat> places = new ArrayList<>();

            places.addAll(placeToEatRepository.findAll());

            if(places.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(places,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/places_to_eat")
    public ResponseEntity<PlaceToEat> createPlace(@RequestBody PlaceToEat place){
        try{
            PlaceToEat placeToEat = placeToEatRepository.save(new PlaceToEat(place.getTitle(),place.getDescription()));
            return new ResponseEntity<>(placeToEat,HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
