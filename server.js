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
    EXCLUDES: '?exclude=minutely,hourly,daily,alerts,flags',
    UNITS: '&units=si'
};



// define static folder
app.use(express.static('public'));

/* ----- ROUTES -----  */ 
app.get('/weather/:location', (req, res) => {
    function fetchWeatherForecast (geoData) {
        // gather location data
        try {
            let latitude = geoData[0].latitude;
            let longitude =  geoData[0].longitude;
            let darkSkyUrl = darkSky.URL + darkSky.API_KEY + '/' + latitude + ',' + longitude + darkSky.EXCLUDES + darkSky.UNITS;
            
            return axios({
               method: 'get',
               url: darkSkyUrl,
               timeout: 5000
            });
        } 
        catch(err) {
            console.log('fetchWeatherForecast error caught: ', err);
            throw new Error(err);
        }
    }
    
    function serveWeatherForecast (weather) {
        res.send(weather.data);
    }
    
  geocoder.geocode(req.params.location)
  .then( fetchWeatherForecast )
  .then( serveWeatherForecast )
  .catch(function(err) {
    console.log('An error occured during fetching error data: ', err);
    res.status(404).send('Unable to fetch weather for that location.');
  });
  
});

// Handle errors
app.use(function (err, req, res, next) {
    console.error('Error handled by middleware: ', err);
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' });
    } else {
        res.status(404).send('Unable to fetch weather for that location.');
    }
})


/* ----- START SERVER -----  */ 
app.listen(port, hostname, () => {
  console.log(`app running at http://${hostname}:${port}/`);
});