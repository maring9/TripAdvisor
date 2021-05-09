package com.project.tripplanner;

import com.project.tripplanner.backend.model.City;
import com.project.tripplanner.backend.model.PlaceToVisit;
import com.project.tripplanner.backend.repository.CityRepository;
import com.project.tripplanner.backend.repository.PlaceToVisitRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TripplannerApplication {
	public static void main(String[] args) {
		SpringApplication.run(TripplannerApplication.class, args);
	}
}
