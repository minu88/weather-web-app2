In the project directory, you can run:

### `npm install`
to install all the dependancy packages

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `create account in Rapidapi to create API key to fetch the cities while typing in the input field`
Link -> https://rapidapi.com/wirefreethought/api/geodb-cities/
In the src -> api.js add your created API key: 
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'YOUR API KEY',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

### `create account in Openweathermap to create API key to fetch the current weather of searched cities`
Link -> https://openweathermap.org/current
In the src -> api.js add your created API key: 
export const WEATHER_API_KEY = 	'YOUR API KEY';

