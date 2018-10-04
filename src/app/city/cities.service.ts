import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICity } from './city'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private apiBaseUrl = "http://localhost:1028/api";

  constructor(private http: HttpClient) { }

  getCities():Observable<ICity[]> {
    return this.http.get<ICity[]>(this.apiBaseUrl + "/cities");
  }
}
