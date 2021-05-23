package com.project.tripplanner.backend.controller;

import com.project.tripplanner.backend.model.PlaceToEat;
import com.project.tripplanner.backend.model.PlaceToStay;
import com.project.tripplanner.backend.repository.PlaceToEatRepository;
import com.project.tripplanner.backend.repository.PlaceToStayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class PlaceToEatController {
    @Autowired
    private PlaceToEatRepository placeToEatRepository;

    @GetMapping(value = "/city={cityName}/places_to_eat")
    public ResponseEntity<List<PlaceToEat>> getAllPlacesToEat(@PathVariable String cityName){
        try{
            List<PlaceToEat> places = new ArrayList<>();
            System.out.println(cityName);

            places.addAll(placeToEatRepository.findByCityName(cityName));

            if(places.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(places,HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("*/places_to_eat/{image_name}/getImage")
    public File getImage(@PathVariable String image_name){
        System.out.println(image_name);
        return new File("/resources/images/" + image_name);
    }


//    @PostMapping("/places_to_eat")
//    public ResponseEntity<PlaceToEat> createPlace(@RequestBody PlaceToEat place){
//        try{
//            PlaceToEat placeToEat = placeToEatRepository.save(new PlaceToEat(place.getTitle(),place.getDescription()));
//            return new ResponseEntity<>(placeToEat,HttpStatus.CREATED);
//        }catch (Exception e){
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//
//    }
}
