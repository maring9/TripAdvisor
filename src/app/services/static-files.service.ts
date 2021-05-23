import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaticFilesService {

  constructor() {
  }

  public getStaticFileUrl(fileName: string): string {
    return `${environment.apiUrl.replace('/api/', '')}/${fileName}`;
  }
}
