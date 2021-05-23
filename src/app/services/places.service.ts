import {Injectable} from '@angular/core';
import {ILocation} from '../models/location';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  myBookmarks: number[] = [
    3
  ];

  public state = {
    city: ''
  };

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ILocation[]> {
    const url = `${environment.apiUrl}city=${this.state.city}/places_to_visit`;
    return this.http.get<ILocation[]>(url);
  }

  whereToStay(): Observable<ILocation[]> {
    const url = `${environment.apiUrl}city=${this.state.city}/places_to_stay`;
    return this.http.get<ILocation[]>(url);
  }

  whereToEat(): Observable<ILocation[]> {
    const url = `${environment.apiUrl}city=${this.state.city}/places_to_eat`;
    return this.http.get<ILocation[]>(url);
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
