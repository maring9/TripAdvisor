import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

interface Item {
  name: string;
  url: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  items: Item[] = [
    {
      name: 'Places',
      url: '/places',
    },
    {
      name: 'Where to stay',
      url: '/where-to-stay',
    },
    {
      name: 'Where to eat',
      url: '/where-to-eat',
    },
    {
      name: 'Get inspired',
      url: '/get-inspired',
    },
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public isActive(url: string): boolean {
    return this.router.url.split('?')[0] === url;
  }
}
