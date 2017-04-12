'use strict';

/*
    axios is a 3rd party library 
        * Promise based HTTP client for the browser and node.js
        * https://github.com/mzabriskie/axios
*/
var axios = require("axios");

const CORS_PROXY = 'https://crossorigin.me/';
const API_KEY = '6853b34c5832a88384e04135dcb67121';
const OPEN_WEATHER_MAP_URL = CORS_PROXY + "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY;

/*
 * Gets weather data from the OpenWeatherMap website
*/
module.exports = {
    getTemp ( location ) {
        let encodedLocation = encodeURIComponent(location)
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        console.log(requestUrl);
        // get the data from OpenWeatherMaps
        return axios.get(requestUrl).then(resolve).catch(reject);
        
        
        /* ===== Functions ===== */
        function resolve (res) {
            if (res.data.cod && res.data.message) {
                console.log(res);
                throw new Error(res.data.message);
            } else {
                console.log(res);
                return res.data.main.temp;
            }
        }
        
        function reject (res) {
            console.log('Axios catched error: ' , res);
            throw new Error(res.data.message);
        }
    }
}