import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../../services/places.service';
import {ILocation} from '../../models/location';

@Component({
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  public places: ILocation[] = [];

  constructor(public placesService: PlacesService) {
  }

  ngOnInit(): void {
    this.placesService.getAll().subscribe(t => {
      this.places = t;
    });
  }

}
