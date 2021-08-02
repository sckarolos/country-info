import { createAction, props } from '@ngrx/store';
import { Country } from '../../models/country';

export const getCountryListSuccess = createAction(
  '[Countries/API] Get Countries Success',
  props<{ countries: Country[]; }>()
);

export const getCountryListFailure = createAction(
  '[Countries/API] Get Countries Failure',
  props<{ errorMsg: string; }>()
);




