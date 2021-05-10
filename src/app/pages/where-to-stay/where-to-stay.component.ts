import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../../services/places.service';
import {ILocation} from '../../models/location';

@Component({
  templateUrl: './where-to-stay.component.html',
  styleUrls: ['./where-to-stay.component.scss']
})
export class WhereToStayComponent implements OnInit {

  public places: ILocation[] = [];

  constructor(public placesService: PlacesService) {
  }

  ngOnInit(): void {
    this.placesService.getAll().subscribe(t => {
      this.places = t;
    });
  }

}
