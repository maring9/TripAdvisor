import {Injectable} from '@angular/core';
import {ILocation} from '../models/location';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  myBookmarks: number[] = [
    3
  ];

  constructor() {
  }

  getAll(): Observable<ILocation[]> {
    return of([...Array(20)].map((_, i) => ({
      id: i,
      description: 'plm pm plm lsakdfjlkasd jfa',
      photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
      price: 200,
      title: 'Mda ce sa zic',
      rating: 4
    })));
  }

  getMyBookmarks(): number[] {
    return this.myBookmarks;
  }

  mark(id: number): void {
    this.myBookmarks.push(id);
  }

  unmark(id: number): void {
    this.myBookmarks = this.myBookmarks.filter(markId => markId !== id);
  }

  toggleMark(id: number): void {
    this.isMarked(id) ? this.unmark(id) : this.mark(id);
  }

  isMarked(id: number): boolean {
    return this.myBookmarks.some(markId => id === markId);
  }
}
