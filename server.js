const express = require("express");

// create app
const server = express();

// server config
const hostname = process.env.IP || '127.0.0.1';
const port = process.env.PORT || 3000;

// define static folder
server.use(express.static('public'));

// run server command
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});