import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { CountriesService } from './countries.service';
import { Country } from '../models/country';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getCountryListMockData } from '../common/mocks/country-list-mock-data'
import { GlobalConstants } from '../common/constants/global-constants'

describe('CountriesService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let mockCountriesService: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountriesService]

    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    mockCountriesService = TestBed.inject(CountriesService);
  });

  const apiBaseUrl = GlobalConstants.API_BASE_URL;

  let queryKey = 'Europe';

  const expCountries = getCountryListMockData.expCountries;

  it('Should call the getCountryList api and return the dummy countries', () => {
    mockCountriesService.getCountryList(queryKey).subscribe(
      users => {
        expect(users.length).toBe(2);
        expect(users).toEqual(expCountries, 'should return dummy countries'), fail;
      });

    const req = httpTestingController.expectOne(`${mockCountriesService.apiBaseUrl}${queryKey}`);
    expect(req.request.method).toEqual('GET');
  });

});
