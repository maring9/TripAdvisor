package com.project.tripplanner.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "places_to_eat")
public class PlaceToEat {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id ;

    @Column(name = "title")
    private String title ;

    @Column(name = "description")
    private String description ;

    public PlaceToEat(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public PlaceToEat(){

    }


    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }
}
