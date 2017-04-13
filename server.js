const express = require("express");
/*
    axios is a 3rd party library 
        * Promise based HTTP client for the browser and node.js
        * https://github.com/mzabriskie/axios
*/
const axios = require("axios");

// create app
const app = express();

/* ----- CONFIG -----  */ 
// const hostname = process.env.IP || '127.0.0.1';
const hostname = process.env.IP;
const port = process.env.PORT;

// DarkSky config
const darkSky = {
    API_KEY : process.env.DARK_SKY_API_KEY,
    URL     : `https://api.darksky.net/forecast/${darkSky.API_KEY}`
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
    
    
    
  axios.get( darkSky.URL + req.params.location )
    .then( (weather) => {
        // Respond to the express call
        res.json(weather);
    })
    .catch((err) => {
        console.log(err);
    });
});


/* ----- START SERVER -----  */ 
app.listen(port, hostname, () => {
  console.log(`app running at http://${hostname}:${port}/`);
});