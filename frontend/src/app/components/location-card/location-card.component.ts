import {Component, Input, OnInit} from '@angular/core';
import {ILocation} from '../../models/location';
import {ApiLink, PlacesService} from '../../services/places.service';
import {StaticFilesService} from '../../services/static-files.service';


@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {
  @Input() place: ILocation | null = null;
  @Input() showPrice = false;
  @Input() link: ApiLink | null = null;

  constructor(public placeService: PlacesService, public staticFiles: StaticFilesService) {
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

    // tslint:disable-next-line:no-non-null-assertion
    return this.placeService.isMarked(this.place?.title as string, this.link!) ? 'bookmark' : 'bookmark_border';
  }

}
