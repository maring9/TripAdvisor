import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  styleUrls: ['./bookmarks-list.component.scss']
})
export class BookmarksListComponent implements OnInit {
  @Input() places: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
