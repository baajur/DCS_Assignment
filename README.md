# DCS_Assignment

This is work for DCS_Assignment for Front-end Developer role

## 1. Tech Stacks:

- React / Typescript, Redux (redux-saga), SASS
- Unit tests with Jest / Enzyme

## 2. Description:

A weather app with:

- Home page:
    + Loaded by default with 15 biggest cities by population, sorted in alphabetical order. Once the watch list is empty, it will be loaded with the default 15 cities again.
    + Users can add / remove cities from their favorite list. 
    + Users can remove cities from their watch list
    + Users can click on each city to go to the Detail page for more information on the weather
    + There is a search input to look up weather for other cities. User can add search result to watch list
    + User can toggle temperature unit between Celcius and  Fahrenheit

<img width="1111" alt="desktop_home" src="https://user-images.githubusercontent.com/21174154/92721255-fedd2480-f38f-11ea-922b-7dfa1970e4ff.png">

<img width='300' alt='mobile_home' src='https://user-images.githubusercontent.com/21174154/92721340-292ee200-f390-11ea-8c44-fdbfe543f873.PNG'>


- Detail page:
    + Provide more detailed information on weather of city
    + Users can add, or edit, or delete notes

<img width="564" alt="desktop_detail" src="https://user-images.githubusercontent.com/21174154/92721263-03a1d880-f390-11ea-9b01-77bfa3db7c35.png">

- Location page:
    + From anywhere on the app, user will be asked to grant geolocation permission. Once granted, user will be redirected to location page
    + User can see weather data for their city
    + User can see their location on google map (may have "development" water mark and error prompt, if use free google account)

<img width="1053" alt="desktop_location" src="https://user-images.githubusercontent.com/21174154/92721265-04d30580-f390-11ea-8ec7-305fb025f0a3.png">

<img width='300' alt='mobile_location' src='https://user-images.githubusercontent.com/21174154/92721393-3cda4880-f390-11ea-83d3-35f6b0ea7203.PNG'>

## 3. Features:

- Support offline
- Responsive
- Persisted data in local storage

## 4. Commands:

### a. configs:

- add Open Weather key to `src/configs/open-weather.ts`
- add Google API key to `src/configs/google-map.ts`


### b. install:
```
yarn
```

### c. build:
```
yarn build
```

### d. start:
```
yarn start
```
to run server on 3001

### e. dev:
```
yarn dev
```
to run dev server on 3000

### f. test:
```
yarn test --coverage --watchAll=false
```
