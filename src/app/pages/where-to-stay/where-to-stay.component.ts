import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../../services/places.service';
import {ILocation} from '../../models/location';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './where-to-stay.component.html',
  styleUrls: ['./where-to-stay.component.scss']
})
export class WhereToStayComponent implements OnInit {

  public places: ILocation[] = [];

  constructor(public placesService: PlacesService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.placesService.whereToStay().subscribe(places => {
      this.places = places;
    });
  }

}
