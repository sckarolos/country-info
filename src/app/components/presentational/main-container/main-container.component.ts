import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Region } from '../../../models/region';
import { Country } from '../../../models/country';
import * as fromCountries from '../../../app-store/reducers';
import { CountryActions, CountriesActions } from '../../../app-store/actions';
import { GlobalConstants } from 'src/app/common/constants/global-constants';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})

export class MainContainerComponent implements OnInit {

  constructor(private store: Store) {
    this.regions$ = store.select(fromCountries.selectRegions);
  }

  regionA = GlobalConstants.REGION[0];
  regionB = GlobalConstants.REGION[1];

  showDetails = false;
  showButton = false;
  
  isDisabled = true;

  regions$: Observable<Region[]>;
  countryList$!: Observable<Country[]>;
  selectedCountry$!: Observable<Country>;
  currentRegion: string = '';
  currentCountry: string = '';

  selectRegion(option: string) {
    if (option !== '') {
      this.getCountryList(option);
      this.isDisabled = true;
      this.showDetails = false;
      this.currentCountry = '';
    } else {
      this.currentRegion = option;
    }
  };

  selectCountry(option: string) {
    if (option !== '') {
      this.isDisabled = false;
      this.showDetails = false;
      this.currentCountry = option;
    }
  };

  onButtonPress() {
    this.getCountryDetails(this.currentCountry);
    this.showDetails = true;
  }

  getCountryList(region: string) {
    if (region === this.regionA || region === this.regionB) {
      this.showButton = true;
      if (this.currentCountry !== '') {
        this.isDisabled = false;
      }
    }
    this.store.dispatch(CountriesActions.getCountryList({ region }));
    this.countryList$ = this.store.select(fromCountries.selectCountries);
  };

  getCountryDetails(name: string) {
    this.store.dispatch(CountryActions.getCountry({ name }));
    this.selectedCountry$ = this.store.select(fromCountries.selectSelectedCountry);
  };


  ngOnInit(): void {
  }
}
