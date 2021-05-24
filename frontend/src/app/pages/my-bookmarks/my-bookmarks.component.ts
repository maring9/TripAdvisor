import { Component, OnInit } from '@angular/core';
import {PlacesService} from '../../services/places.service';

@Component({
  templateUrl: './my-bookmarks.component.html',
  styleUrls: ['./my-bookmarks.component.scss']
})
export class MyBookmarksComponent implements OnInit {

  public places: any[] = [];

  constructor(private placeService: PlacesService) {
  }

  ngOnInit(): void {
    this.placeService.getGetInspired(true)
      .subscribe(places => {
          this.places = places;
          console.log(this.places);
        }
      );
  }
}
