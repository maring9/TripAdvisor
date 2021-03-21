package com.project.tripplanner.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "places_to_stay")
public class PlaceToStay{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id ;

    @Column(name = "title")
    private String title ;

    @Column(name = "description")
    private String description ;

    public PlaceToStay(String title, String description) {
        this.title = title ;
        this.description = description;
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
