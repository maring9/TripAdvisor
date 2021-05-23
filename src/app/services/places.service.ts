import {ApplicationRef, Injectable} from '@angular/core';
import {ILocation} from '../models/location';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {map} from 'rxjs/operators';

function groupByKey(array: any[], key: any): any[] {
  return array
    .reduce((hash, obj) => {
      if (obj[key] === undefined) {
        return hash;
      }
      return Object.assign(hash, {[obj[key]]: (hash[obj[key]] || []).concat(obj)});
    }, {});
}

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  public state = {
    city: ''
  };

  private myBookmarks: string[] = [];

  constructor(private http: HttpClient,
              private auth: AuthService) {
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

  getGetInspired(): Observable<any> {
    const url = `${environment.apiUrl}${this.auth.userData?.id}/getInspired`;
    return this.http.get<any[]>(url).pipe(
      map((list: any[]) => {
        list = list.map(t => {
          return {
            ...t,
            userId: t.user.id
          };
        });
        const listObject: object = groupByKey(list, 'userId');
        // @ts-ignore
        return Object.keys(listObject).map(k => listObject[k]);
      }));
  }

  updateMyBookmarks(): void {
    console.log(this.auth.userData);
    const url = `${environment.apiUrl}${this.auth.userData?.id}/getUserBookmarks`;
    this.http.get<{ locationName: string }[]>(url)
      .pipe(map(bookmark => bookmark.map(t => t.locationName)))
      .subscribe(bookmarks => {
        this.myBookmarks = bookmarks;
      });
  }

  mark(locationName: string): void {
    console.log(`mark: ${locationName}`);
    const url = `${environment.apiUrl}places_to_visit/${this.auth.userData?.id}/addBookmark`;
    this.http.post(url, {
      locationName
    }).subscribe(t => {
      this.myBookmarks.push(locationName);
    });
  }

  unmark(id: string): void {
    // this.myBookmarks = this.myBookmarks.filter(markId => markId !== id);
  }

  toggleMark(id: string): void {
    this.isMarked(id) ? this.unmark(id) : this.mark(id);
    this.updateMyBookmarks();
  }

  isMarked(id: string): boolean {
    return this.myBookmarks.some(markId => id === markId);
  }
}
