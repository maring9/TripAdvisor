import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../../services/places.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public city = '';

  constructor(private placesService: PlacesService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void> {
    this.placesService.state.city = this.city;
    await this.router.navigate(['/', 'places']);
  }

}
