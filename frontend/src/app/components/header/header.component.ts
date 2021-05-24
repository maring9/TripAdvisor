import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {PlacesService} from '../../services/places.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService, public placesService: PlacesService) { }

  ngOnInit(): void {
  }

}
