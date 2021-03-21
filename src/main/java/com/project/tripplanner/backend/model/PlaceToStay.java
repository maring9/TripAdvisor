package com.project.tripplanner.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "table_places_to_stay")
public class PlaceToStay extends PlaceToVisit {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id ;

    @Column(name = "title")
    private String title ;

    @Column(name = "description")
    private String description ;

    public PlaceToStay(String title, String description) {
        super(title, description);
        this.title = title ;
        this.description = description;
    }

    @Override
    public long getId() {
        return id;
    }

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public String getDescription() {
        return description;
    }
}
