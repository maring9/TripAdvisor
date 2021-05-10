package com.project.tripplanner.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "places_to_eat")
public class PlaceToEat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id ;

    @Column(name = "title")
    private String title ;

    @Column(name = "description")
    private String description ;

    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "city_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private City city;

    @Column(name = "rating")
    private int rating;

    public PlaceToEat(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public PlaceToEat(){

    }
    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
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

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    @Override
    public String toString() {
        return "PlaceToEat{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", city=" + city +
                '}';
    }
}
