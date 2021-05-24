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

export type ApiLink =
  | 'places_to_stay'
  | 'places_to_eat'
  | 'places_to_visit';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _initialState = {
    city: ''
  };
  public state = {...this._initialState};

  private myBookmarks: {
    [key in ApiLink]: string[]
  } = {
    places_to_eat: [],
    places_to_visit: [],
    places_to_stay: [],
  };

  constructor(private http: HttpClient,
              private auth: AuthService) {

    auth.getUserData().subscribe(data => {
      if (!data) {
        this.state = {...this._initialState};
      }
    });
  }

  resetState(): void {
    this.state = this._initialState;
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

  getGetInspired(forMe = false): Observable<any> {
    const url = `${environment.apiUrl}${this.auth.userData?.id}/${forMe ? 'getUserBookmarks' : 'getInspired'}`;
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

  updateMyBookmarks(link: ApiLink): void {
    console.log(this.auth.userData);
    const url = `${environment.apiUrl}${this.auth.userData?.id}/getUserBookmarks`;
    this.http.get<{ locationName: string }[]>(url)
      .pipe(map(bookmark => bookmark.map(t => t.locationName)))
      .subscribe(bookmarks => {
        this.myBookmarks[link] = bookmarks;
      });
  }

  mark(locationName: string, link: ApiLink): void {
    console.log(`mark: ${locationName}`);
    const url = `${environment.apiUrl}${link}/${this.auth.userData?.id}/addBookmark`;
    this.http.post(url, {
      locationName
    }).subscribe(t => {
      // tslint:disable-next-line:no-non-null-assertion
      this.myBookmarks[link]!.push(locationName);
    });
  }

  unmark(locationName: string, link: ApiLink): void {
    console.log(`mark: ${locationName}`);
    const url = `${environment.apiUrl}${link}/${this.auth.userData?.id}/removeBookmark`;
    this.http.post(url, {
      locationName
    }).subscribe(t => {
      // tslint:disable-next-line:no-non-null-assertion
      this.myBookmarks[link]! = this.myBookmarks[link]!.filter(markId => markId !== locationName);
    });
  }

  toggleMark(id: string, link: ApiLink): void {
    this.isMarked(id, link) ? this.unmark(id, link) : this.mark(id, link);
    this.updateMyBookmarks(link);
  }

  isMarked(id: string, link: ApiLink): boolean {
    // tslint:disable-next-line:no-non-null-assertion
    return this.myBookmarks[link]!.some(markId => id === markId);
  }
}
