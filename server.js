'use strict';

const express = require("express");
/*
    axios is a 3rd party library 
        * Promise based HTTP client for the browser and node.js
        * https://github.com/mzabriskie/axios
*/
const axios = require("axios");
const NodeGeocoder = require('node-geocoder');

// create app
const app = express();

/* ----- CONFIG -----  */ 
// const hostname = process.env.IP || '127.0.0.1';
const hostname = process.env.IP;
const port = process.env.PORT;

// NodeGeocoder config
const geocoderOptions = {
  provider: 'google',
};
const geocoder = NodeGeocoder(geocoderOptions);

// Dark Sky config
const darkSky = {
    API_KEY : process.env.DARK_SKY_API_KEY,  // this is a private key, you can create your own by signing up to Dark Sky - https://darksky.net
    URL     : 'https://api.darksky.net/forecast/',
    EXCLUDES: '?exclude=minutely,hourly,daily,alerts,flags'
};



// define static folder
app.use(express.static('public'));

// OpenWeatherMaps uses http protocol to send json data about weather.
// To avoid problems with the browser CORS policy make sure you are sending 
// requestes through http
// app.use(function (req, res, next){
//   if (req.headers['x-forwarded-proto'] === 'https') {
//       res.redirect('http://' + req.hostname + req.url);
//   } else {
//       next();
//   }
// });

/* ----- ROUTES -----  */ 
app.get('/weather/:location', (req, res) => {
    function fetchWeatherForecast (geoData) {
        // gather location data and set to Warsaw AS A FALLBACK.
        // This fallback should be gone when ERROR HANDLING will be implemented
        let latitude = geoData[0].latitude || '52.2296756';
        let longitude =  geoData[0].longitude || '21.0122287';
        let darkSkyUrl = darkSky.URL + darkSky.API_KEY + '/' + latitude + ',' + longitude + darkSky.EXCLUDES;
        // console.log('geoData: ', geoData);
        // console.log('lat: ', latitude);
        // console.log('lon: ', longitude);
        // console.log('darkSkyUrl: ', darkSkyUrl);
        
        return axios.get( darkSkyUrl );
    }
    function serveWeatherForecast (weather) {
        // console.log('DarkSky: ', weather.data);
        res.send(weather.data);
    }
    
  geocoder.geocode(req.params.location)
  .then( fetchWeatherForecast )
  .then( serveWeatherForecast )
  .catch(function(err) {
    console.log('ERROR ', err)
    // ADD ERROR HANDLING!
  });
  
});


/* ----- START SERVER -----  */ 
app.listen(port, hostname, () => {
  console.log(`app running at http://${hostname}:${port}/`);
});