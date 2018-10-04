import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPointOfInterest } from './point-of-interest';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PointsOfInterestService {

  constructor(private http: HttpClient) { }

  public getData(cityId: number) :  Observable<IPointOfInterest[]> {
    return this.http.get<IPointOfInterest[]>(environment.baseUrl + '/cities/' + cityId + '/pointsofinterest/');
  }
}
