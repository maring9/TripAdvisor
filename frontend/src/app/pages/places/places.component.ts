import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../../services/places.service';
import {ILocation} from '../../models/location';
import {ActivatedRoute} from '@angular/router';
import {zip} from 'rxjs';

@Component({
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  public places: ILocation[] = [];
  public myBookmarks: string[] = [];

  constructor(public placesService: PlacesService) {
  }

  ngOnInit(): void {
    this.placesService.updateMyBookmarks('places_to_visit');
    this.placesService.getAll().subscribe(result => {
      this.places = result;
      console.log(this.places, this.myBookmarks);
    });
  }

}
