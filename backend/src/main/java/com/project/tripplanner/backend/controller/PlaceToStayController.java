package com.project.tripplanner.backend.controller;

import com.project.tripplanner.backend.model.PlaceToStay;
import com.project.tripplanner.backend.model.PlaceToVisit;
import com.project.tripplanner.backend.repository.PlaceToStayRepository;
import com.project.tripplanner.backend.repository.PlaceToVisitRepository;
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
public class PlaceToStayController {

    @Autowired
    private PlaceToStayRepository placeToStayRepository;

//    @GetMapping("/")
//    public void home(){
//        System.out.println("welcome");
//    }

    //TODO: adaug metoda pentru returnarea unui obiect File

    @GetMapping(value = "/city={cityName}/places_to_stay")
    public ResponseEntity<List<PlaceToStay>> getAllPlacesToStay(@PathVariable String cityName){
        try{
            List<PlaceToStay> places = new ArrayList<>();

            places.addAll(placeToStayRepository.findByCityName(cityName));

            if(places.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(places,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("*/places_to_stay/{image_name}/getImage")
    public File getImage(@PathVariable String image_name){
        System.out.println(image_name);
        return new File("/resources/images/" + image_name);
    }



//    @PostMapping("/places_to_stay")
//    public ResponseEntity<PlaceToStay> createPlace(@RequestBody PlaceToStay place){
//        try{
//            PlaceToStay placeToStay = placeToStayRepository.save(new PlaceToStay(place.getTitle(),place.getDescription()));
//            return new ResponseEntity<>(placeToStay,HttpStatus.CREATED);
//        }catch (Exception e){
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//
//    }

}
