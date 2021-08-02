# Country Information Angular App
A basic responsive web application developed using <b>Angular 12</b>, <b>NgRx</b>, <b>SCSS</b> and <b>Bootstrap</b>.  

## This application: 

- Reads the records from: https://restcountries.eu/rest/v2/region/europe based on the selected region provided by the user (Asia, Europe).
- Uppon region selection, a second dropdown is displayed. This dropdown displays a list of countries.
- Uppon region selection, a button is also displayed. The button is disabled until the user select a country from the country dropdown. 
- Once the button is enabled, the used can click on it. A table containing information about the selected country will show up on button click. 
- Data are always fetched from the store and the service is not called if both regions have already been selected before. The service is only called the first time the user selects "Asia" or "Europe".
- Country does not prepolulate on Region change on purpose.
- Country details are displayed in a tabular component.



## Version

| Name  | Version |
| ------------- | ------------- |
| Angular  | 12.0.1  |


## Project setup

#### Install dependencies
```
Navigate to root folder and type:
npm install
```
#### Run the server
```
npm start
```
```
ng serve -o
```

#### Run tests
```
ng test
```

#### Run e2e tests
```
ng e2e
```

## Application Screenshot

<kbd>

  ![Capture](https://github.com/sckarolos/country-info/blob/main/src/assets/screenshot.png)

</kbd>


## Explanation of design decisions

- Angular 12.0.1 is used as it is the latest version of Angular framework (Current active version - Active ends: Nov 12, 2021, Long Term Support ends: Nov 12, 2022).
- NGRX 12 is used to implement state management. 
- Bootstrap 5.0.2 CSS is used as it allows the quick and easy development of responsive layouts. Note: Only bootstrap CSS is added and not bootstrap JS as it wouldn't be useful is such a small application.
- SCSS/SASS is used. All components are using the global styles.scss file to import colour, font and spacing variables.
- Cypress and Protractor are used for e2e testing.
- Jasmine and Karma are used for unit testing. 

## Technical Notes:

- A global constants file is used for the base API url and the hardcoded regions (Asia, Europe). This is a better approach instead of hardcoding them in the html and service.ts files respectively.
- A country-list-mock-data.ts file is used to mock the API response. It is used in unit tests. 
- Folder structure:
<kbd>

  ![Capture](https://github.com/sckarolos/country-info/blob/main/src/assets/fstructure.png)

</kbd> 

## Things that could be improved

- Change the way button toggles. Implement alternative solution when button is always enabled. Use switchMap operator on repeated button clicks.
- Remove all logic from presentation components (Smart Components vs Presentational Components)
- Add extensive unit and e2e tests across all components.
- Accessibility (use of screen readers, font sizes should be based on  ) can be improved.  
- Create separate SCSS file for variables. 

## References / Patterns to follow

[Angular Releases and Versioning](https://angular.io/guide/releases)

[Components vs Presentational Components](https://blog.angular-university.io/angular-2-smart-components-vs-presentation-components-whats-the-difference-when-to-use-each-and-why/)

[Angular coding standards])(https://angular.io/guide/styleguide)
