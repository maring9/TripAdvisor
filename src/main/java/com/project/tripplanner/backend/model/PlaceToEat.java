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
    private Integer rating;

    @Column(name = "image_name")
    private String imageName;


    public PlaceToEat(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public PlaceToEat(){

    }

    public String getImage() {
        return imageName;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public void setImage(String image) {
        this.imageName = image;
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

    public Integer getRating() {
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
