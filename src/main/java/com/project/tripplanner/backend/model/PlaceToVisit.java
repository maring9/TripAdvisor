package com.project.tripplanner.backend.model;

import javax.persistence.*;

@Entity
@Table(name="place_to_visit")
public class PlaceToVisit {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private long id ;

    @Column(name = "title")
    private String title ;

    @Column(name = "description")
    private String description ;

    @Column(name = "rating")
    private int rating;

    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    public PlaceToVisit(){

    }

    public PlaceToVisit(String title, String description) {
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

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Place [id=" + id + ", title=" + title + ", desc=" + description + "]";
    }
}
