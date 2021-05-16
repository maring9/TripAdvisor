package com.project.tripplanner;

import com.project.tripplanner.backend.model.City;
import com.project.tripplanner.backend.model.PlaceToVisit;
import com.project.tripplanner.backend.repository.CityRepository;
import com.project.tripplanner.backend.repository.PlaceToVisitRepository;
import com.project.tripplanner.backend.service.LocationService;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.multipart.MultipartFile;

@SpringBootApplication
public class TripplannerApplication {

	@Autowired
	private CityRepository repo;

	@Autowired
	private PlaceToVisitRepository placeToVisitRepository;

	public static void main(String[] args) {
		SpringApplication.run(TripplannerApplication.class, args);


	}

//	@Bean
//	InitializingBean sendDatabase() {
//		return () -> {
////			City praga = new City("Praga");
////			repo.save(praga);
////			PlaceToVisit paris = placeToVisitRepository.findByTitle("Paris");
//
//			PlaceToVisit podCarol = new PlaceToVisit("podCarol",
//					"descriere podCarol",repo.findByName("Praga"));
//
//			LocationService.uploadImage(podCarol,"podCarol.jpg");
//			placeToVisitRepository.save(podCarol);
//
//			LocationService.getImage(podCarol);
////			placeToVisitRepository.save(new PlaceToVisit("titlu demo",
////					"descriere demo",repo.findByName("Praga")));
//		};
//	}

}
