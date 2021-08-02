import * as fromReducer from './countries.reducer';
import * as fromActions from '../actions';
import { Country } from '../../models/country';

describe('Countries Reducer', () => {
  let countries = <Country[]><unknown>[
    {
      name: 'Greece', capital: "Athens", flag: "https://restcountries.eu/data/grc.svg", currencies: [
        { "code": "EUR", "name": "Euro", "symbol": "€" }
      ]
    },
    {
      name: 'Germany', capital: "Berlin", flag: "https://restcountries.eu/data/deu.svg", currencies: [
        { "code": "EUR", "name": "Euro", "symbol": "€" }
      ]
    },
    {
      name: 'Gibraltar', capital: "Gibraltar", flag: "https://restcountries.eu/data/gib.svg", currencies: [
        { "code": "GIP", "name": "Gibraltar pound", "symbol": "£" }
      ]
    }
  ];

  const country = countries[2];
  const { initialState } = fromReducer;

  describe('Default state', () => {
    it('Should return the default state', () => {
      const action = {} as any;
      const state = fromReducer.countriesReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('Get Country action', () => {
    it('Should return a updated state with the country which has been selected by the user', () => {
      const action = fromActions.CountryActions.getCountry({ name: 'Germany' });
      const previousState = { ...initialState, error: '', countries };
      const state = fromReducer.countriesReducer(previousState, action);

      expect(state.error).toEqual('');
      expect(state.country).toEqual(countries[1]);
    });
  });

  describe('Get countries success action', () => {
    it('Should return a new state with list of countries', () => {
      const action = fromActions.CountriesApiActions.getCountryListSuccess({ countries });
      const state = fromReducer.countriesReducer(initialState, action);

      expect(state.error).toEqual('');
      expect(state.countries).toEqual(countries);
    });
  });

  describe('Get countries failure action', () => {
    it('Should return an error message and an empty countries array', () => {
      const error = { message: 'Unexpected Error. Try again later.' };
      const action = fromActions.CountriesApiActions.getCountryListFailure({ errorMsg: error.message });
      const previousState = { ...initialState, error: '' };
      const state = fromReducer.countriesReducer(previousState, action);

      expect(state.error).toEqual(error.message);
      expect(state.countries).toEqual([]);
    });
  });

});
