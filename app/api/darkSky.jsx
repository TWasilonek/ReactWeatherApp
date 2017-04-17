'use strict';

const axios = require("axios");

/*
    Sends a get request to '/weather/:location'
*/
module.exports = {
    getTemp ( location ) {
        return axios.get(`/weather/${location}`)
                .then( weather => weather )
                .catch( err => { 
                    // console.log('Client error ant darkSky API: ', err);
                    throw new Error(err); 
                });
    }
};