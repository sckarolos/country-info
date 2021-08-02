import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainContainerComponent } from './main-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as fromCountries from '../../../app-store/reducers';
import { CountryActions, CountriesActions } from '../../../app-store/actions';

describe('MainContainerComponent with mock store', () => {
  let MainContainerComponent: MainContainerComponent;
  let fixture: ComponentFixture<MainContainerComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainContainerComponent],
      providers: [provideMockStore({
        selectors: [
          { selector: fromCountries.selectRegions, value: [] }
        ]
      })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(MainContainerComponent);
  //   MainContainerComponent = fixture.componentInstance;
  //   store = TestBed.inject(MockStore);
  //   spyOn(store, 'dispatch');
  //   fixture.detectChanges();
  // });

  // it('Should be created', () => {
  //   expect(MainContainerComponent).toBeTruthy();
  // });

  // describe('toggleDetails method', () => {

  //   it("Should call getCountryList if the selectedOption property is 'Europe'", () => {
  //     const selected = 'Europe';
  //     let getCountryList = spyOn(MainContainerComponent, 'getCountryList');
  //     MainContainerComponent.selectCountry(selected);
  //     expect(getCountryList).toHaveBeenCalled();
  //   });

  //   it("Should call getCountryList if the selectedOption property is 'Asia'", () => {
  //     const selected = 'Asia';
  //     let getCountryList = spyOn(MainContainerComponent, 'getCountryList');
  //     MainContainerComponent.selectCountry(selected);
  //     expect(getCountryList).toHaveBeenCalled();
  //   });

  // });

  // it('Should dispatch CountriesActions.getCountryList action when getCountryList() is called', () => {
  //   const $event = 'region';
  //   const action = CountriesActions.getCountryList({ region: $event });
  //   MainContainerComponent.getCountryList($event);
  //   expect(store.dispatch).toHaveBeenCalledWith(action);
  // });

});