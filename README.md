# Weather

A weather forecasting web application, created using React, Flux & ES6. [Demo](http://weatherforecastnow.com/)

![alt text](https://github.com/ArunRamachandran/weather/blob/master/app/images/Screenshot.png)

![alt text](https://github.com/ArunRamachandran/weather/blob/master/app/images/Screenshot2.png)

## Getting Started

These instructions will get you a copy of the project up & running on your local machine for development & testing purpose. 

### Prerequisites

You need to have Node.js an npm installed on your machine.

### Installation

* Clone the repository. ( Execute the command given below )

```
git clone git@github.com:ArunRamachandran/weather.git
```
* Open a new terminal & navigate to the cloned respository

* Execute ```npm install```. This will download and install all dependencies that are needed.

### Available Scripts

In the project directory, you can run: 

```
 npm run dev
```
Runs the app in the development mode.
Open http://localhost:8080/ to view it in the browser.

```
 npm run build 
```
Build the app for production to the `build` folder.
It correctly bundles the React in production mode.

```
 npm run test 
```
Launches the test runner.

### Further development plans & details

As of now, the application will fetch the data from OpenWeatherMapApi & display 5 set of data after internally classifying the data received from the api.

Planning to make these changes in future, in order to improve the user experience.

* An option to view the complete weather forecast details of a day when user click on any of the given date. Will implement an overlay / popup & display the data within the container [ This feature has already implemented ]

* An option to forecast data according to a users choice. This functionality will enable user to choose their own favourite place in order to forecast weather.

* Optimize the UI for different mobile / tablet / desktop devices
