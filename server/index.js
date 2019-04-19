const express = require('express');
// must require express to run with node for server
const app = express();
const port = 9100;
// set port to really any port you need most common are 3000, 8080
const bodyParser = require('body-parser');
// used to be included in Express V 3 but now needs to be installed and required. this is what parses the data/json so we can either manipulate or get what we need and send to client
const path = require('path')
// path can be used with ngenx and other code to give direct file pathing to render pages, html etc
const { addMovie, getAllMovies } = require('./database/oneFileApproach.js');

app.use(bodyParser.json({ type: 'application/json' }));
// could also be written as "app.use(bodyParser.json())" the object is optional that is passed in

app.use(express.static('client/dist'));
// "/" and index.html are references to the same file the above line is saying to the server go to the dirname and under the client folder inside the dist folder render the index.html file when the page renders


// app.get('/', function (req, res) {

// });





app.listen(port, error => {
  if (error) {
    console.log(error, 'Error with connecting to the SERVER!!!');
  }
  console.log(`Listening on port ${port}!!`);
});