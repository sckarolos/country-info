import * as fromCountriesApi from './countries-api.actions';

describe('Countries API actions', () => {

  describe('Get Countries Success action', () => {
    it('Should return the getCountryListSuccess action', () => {
      expect(fromCountriesApi.getCountryListSuccess.type).toBe('[Countries/API] Get Countries Success');
    });
  });

  describe('Get Countries Failure action', () => {
    it('Should return the getCountryListFailure action', () => {
      expect(fromCountriesApi.getCountryListFailure.type).toBe('[Countries/API] Get Countries Failure');
    });
  });
});
