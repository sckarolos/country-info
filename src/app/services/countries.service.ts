import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../models/country';
import { GlobalConstants } from '../common/constants/global-constants'

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  public apiBaseUrl = GlobalConstants.API_BASE_URL;

  public handleError(apiCall: string) {
    return (error: HttpErrorResponse): Observable<any> => {
      return throwError(error);
    };
  };

  getCountryList(regionSelected: string): Observable<Country[]> {
    const url = `${this.apiBaseUrl}${regionSelected}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError('getCountryList errored'))
    );
  };

  constructor(private http: HttpClient) { }

}