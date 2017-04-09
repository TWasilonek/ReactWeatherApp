const express = require("express");

// create app
const server = express();

// server config
// const hostname = process.env.IP || '127.0.0.1';
const hostname = process.env.IP;
const port = process.env.PORT;

// define static folder
server.use(express.static('public'));

// OpenWeatherMaps uses http protocol to send json data about weather.
// To avoid problems with the browser CORS policy make sure you are sending 
// requestes through http
server.use(function (req, res, next){
   if (req.headers['x-forwarded-proto'] === 'http') {
       next();
   } else {
       res.redirect('http://' + req.hostname + req.url);
   }
});


// run server command
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});