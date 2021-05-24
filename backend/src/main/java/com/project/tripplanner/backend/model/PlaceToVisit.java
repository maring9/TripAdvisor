package com.project.tripplanner.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name="place_to_visit")
public class PlaceToVisit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id ;

    @Column(name = "title")
    private String title ;

    @Column(name = "description")
    private String description ;

    @Column(name = "rating")
    private Integer rating;

//    @Lob
//    @Basic(fetch = FetchType.LAZY)
    @Column(name = "image_name")
    private String imageName;

    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "city_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private City city;

    public PlaceToVisit(){

    }

    public PlaceToVisit(String title, String description,City city) {
        this.title = title;
        this.description = description;
        this.city = city;
    }

    public String getImage() {
        return imageName;
    }

    public void setImage(String image) {
        this.imageName = image;
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

    public Integer getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    @Override
    public String toString() {
        return "Place [id=" + id + ", title=" + title + ", desc=" + description + "]";
    }
}