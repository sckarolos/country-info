import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../models/country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})

export class CountryDetailsComponent implements OnInit {

  @Input() countryDetails!: Country | any;
  @Input() selectedOption: string = '';

  toggleDetails() {
    return (this.selectedOption === '' ||
      this.selectedOption === 'Asia' ? false : true ||
      this.selectedOption === 'Europe');
  };

  constructor() { }

  ngOnInit(): void {
    this.selectedOption = '';
  }

}
