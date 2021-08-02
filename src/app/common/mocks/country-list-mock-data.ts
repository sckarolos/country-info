import { Country } from "src/app/models/country";

export class getCountryListMockData {

    public static expCountries = <Country[]><unknown>[
      {
        name: 'Greece',
        capital: "Athens",
        flag: "https://restcountries.eu/data/grc.svg",
        currencies: [
          {
            "code": "EUR",
            "name": "Euro",
            "symbol": "€"
          }
        ]
      },
      {
        name: 'Germany',
        capital: "Berlin",
        flag: "https://restcountries.eu/data/deu.svg",
        currencies: [
          {
            "code": "EUR",
            "name": "Euro",
            "symbol": "€"
          }
        ]
      },
      {
        name: 'Gibraltar',
        capital: "Gibraltar",
        flag: "https://restcountries.eu/data/gib.svg",
        currencies: [
          {
            "code": "GIP",
            "name": "Gibraltar pound",
            "symbol": "£"
          }
        ]
      },
    ];

}