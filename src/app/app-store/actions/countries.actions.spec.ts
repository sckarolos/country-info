import * as fromCountries from './countries.actions';

describe('Countries actions', () => {
  it('Should return the getCountryList action', () => {
    expect(fromCountries.getCountryList.type).toBe('[Countries/API] Get Countries');
  });
});
