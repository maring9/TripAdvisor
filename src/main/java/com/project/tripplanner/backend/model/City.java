package com.project.tripplanner.backend.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "cities")
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "city",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Set<PlaceToVisit> placeToVisit = new HashSet<>();

    public City() {
    }

    public City(String name) {
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<PlaceToVisit> getPlaceToVisit() {
        return placeToVisit;
    }

    public void setPlaceToVisit(Set<PlaceToVisit> placeToVisit) {
        this.placeToVisit = placeToVisit;
    }


}
