import * as fromCountry from './country.actions';

describe('Country actions', () => {

  describe('GetCountry actions', () => {
    it('Should return the getCountry action', () => {
      expect(fromCountry.getCountry.type).toBe('[Country details page] Get Country');
    });
  });

});
