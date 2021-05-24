import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../../services/places.service';

@Component({
  templateUrl: './get-inspired.component.html',
  styleUrls: ['./get-inspired.component.scss']
})
export class GetInspiredComponent implements OnInit {

  public places: any[] = [];

  constructor(private placeService: PlacesService) {
  }

  ngOnInit(): void {
    this.placeService.getGetInspired()
      .subscribe(places => {
          this.places = places;
          console.log(this.places);
        }
      );
  }

}
