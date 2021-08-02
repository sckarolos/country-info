import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CountriesActions, CountriesApiActions } from './actions';
import { CountriesService } from '../services/countries.service';
import { Country } from '../models/country';


@Injectable()
export class CountriesEffects {

  countries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountriesActions.getCountryList),
      switchMap(
        ({ region }) => {
          return this.countriesService.getCountryList(region).pipe(
            map((countries: Country[]) => {
              return CountriesApiActions.getCountryListSuccess({ countries });
            }),
            catchError((err) =>
              of(CountriesApiActions.getCountryListFailure({ errorMsg: err.message }))
            )
          );
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private countriesService: CountriesService
  ) { }

}