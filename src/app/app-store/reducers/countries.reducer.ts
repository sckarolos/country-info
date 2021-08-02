import { Action, createReducer, on } from '@ngrx/store';
import { CountriesActions, CountriesApiActions, CountryActions } from '../actions';
import { Region } from '../../models/region';
import { Country } from '../../models/country';

export const countriesFeatureKey = 'countries';

export interface State {
  regions: Region[];
  region: string;
  countries: Country[];
  currencies: string[];
  country: any;
  error: string;
}

export const initialState: State = {
  regions: [{ 'name': 'Asia' }, { 'name': 'Europe' }],
  region: '',
  countries: [],
  country: {},
  currencies: [],
  error: ''
};

export const countriesReducer = createReducer(
  initialState,
  on(CountriesActions.getCountryList, (state, { region }) => {
    return {
      ...state,
      error: '',
      region
    };
  }),
  on(CountriesApiActions.getCountryListSuccess, (state, { countries }) => {
    return {
      ...state,
      error: '',
      countries,
      region: state.region,
    };
  }),
  on(CountriesApiActions.getCountryListFailure, (state, { errorMsg }) => {
    return {
      ...state,
      error: errorMsg
    };
  }),
  on(CountryActions.getCountry, (state, { name }) => {
    return {
      ...state,
      error: '',
      country: state.countries.find((country) => country.name === name)
    };
  }),
);

export const getError = (state: State) => state.error;
export const getCountryList = (state: State) => state.countries;
export const getRegions = (state: State) => state.regions;
export const getRegion = (state: State) => state.region;
export const getCountry = (state: State) => state.country;