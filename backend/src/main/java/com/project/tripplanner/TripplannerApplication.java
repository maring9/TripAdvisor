package com.project.tripplanner;

import com.project.tripplanner.backend.model.City;
import com.project.tripplanner.backend.model.PlaceToVisit;
import com.project.tripplanner.backend.model.User;
import com.project.tripplanner.backend.repository.CityRepository;
import com.project.tripplanner.backend.repository.PlaceToVisitRepository;
import com.project.tripplanner.backend.repository.UserRepository;
import com.project.tripplanner.backend.service.LocationService;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.CacheControl;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.concurrent.TimeUnit;

@SpringBootApplication
public class TripplannerApplication {

	@Autowired
	private CityRepository repo;

	@Autowired
	private PlaceToVisitRepository placeToVisitRepository;

	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(TripplannerApplication.class, args);


	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("*").allowedMethods("*");
			}
		};
	}


//	@Bean
//	InitializingBean sendDatabase() {
//		return () -> {
////			City praga = new City("Praga");
////			repo.save(praga);
//
//			PlaceToVisit stB = new PlaceToVisit("StB","descriere StB",repo.findByName("Madrid"));
//			stB.setImage("podCarol.jpg");
//			placeToVisitRepository.save(stB);
////			User user = new User("username2",
////					"username2@gmail.com","123456");
////			userRepository.save(user);
//
////			PlaceToVisit paris = placeToVisitRepository.findByTitle("Paris");
//
////			PlaceToVisit podCarol = new PlaceToVisit("podCarol",
////					"descriere podCarol",repo.findByName("Praga"));
////
////			LocationService.uploadImage(podCarol,"podCarol.jpg");
////			placeToVisitRepository.save(podCarol);
////
////			LocationService.getImage(podCarol);
//////			placeToVisitRepository.save(new PlaceToVisit("titlu demo",
//////					"descriere demo",repo.findByName("Praga")));
//		};
//	}

}
