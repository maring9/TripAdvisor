package com.project.tripplanner.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "table_places_to_eat")
public class PlaceToEat extends PlaceToVisit {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id ;

    @Column(name = "title")
    private String title ;

    @Column(name = "description")
    private String description ;

    public PlaceToEat(String title, String description) {
        super(title, description);
        this.title = title;
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
