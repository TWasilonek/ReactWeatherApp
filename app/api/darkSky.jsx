'use strict';

const axios = require("axios");

/*
    Sends a get request to '/weather/:location'
*/
module.exports = {
    getTemp ( location ) {
        return axios.get(`/weather/${location}`)
                .then( weather => weather )
                .catch( err => { throw new Error(err); });
    }
};