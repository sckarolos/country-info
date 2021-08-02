import { createAction, props } from '@ngrx/store';

export const getCountryList = createAction(
  '[Countries/API] Get Countries',
  props<{ region: string; }>()
);
