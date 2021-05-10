import {Component, Input, OnInit} from '@angular/core';
import {ILocation} from '../../models/location';
import {PlacesService} from '../../services/places.service';


@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {
  @Input() place: ILocation | null = null;
  @Input() showPrice = false;

  constructor(public placeService: PlacesService) {
  }

  ngOnInit(): void {
  }

  change(e: any): void {
    console.log(e);
  }

  getBookmarkImage(): 'bookmark' | 'bookmark_border' {
    if (typeof this.place?.id !== typeof 0) {
      return 'bookmark_border';
    }

    // @ts-ignore
    return this.placeService.isMarked(this.place.id) ? 'bookmark' : 'bookmark_border';
  }

}
