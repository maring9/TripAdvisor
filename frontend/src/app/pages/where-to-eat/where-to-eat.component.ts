import {Component, OnInit} from '@angular/core';
import {ILocation} from '../../models/location';
import {PlacesService} from '../../services/places.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './where-to-eat.component.html',
  styleUrls: ['./where-to-eat.component.scss']
})
export class WhereToEatComponent implements OnInit {

  public places: ILocation[] = [];

  constructor(public placesService: PlacesService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.placesService.whereToEat().subscribe(places => {
      this.places = places;
    });
  }

}
