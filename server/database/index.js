const mysql = require('mysql');
// must require mysql and set up configuration to connect to DB, schema file will create the Db and the tables based on the schema provided
const mysqlConfig = require('./config.js');
// using user, password and config from config.js file
const connection = mysql.createConnection(mysqlConfig);


const getAllMovies = (callback) => {
  const queryString = `SELECT * FROM movies`;
  connection.query(queryString, (error, results) => {
    if (error) {
      console.log(error, 'Error with Get All Movies DB Func');
      callback(error, null);
    } else {
      console.log(results, 'Results from Get All Movies Func!');
      callback(null, results);
    }
  });
};

const addMovie = (params, callback) => {
  const queryString = `INSERT into My-Movies(title, releaseDate, genre) values(?, ?, ?)`;
  connection.query(queryString, [params.title, params.releaseDate, params.genre], (error, results) => {
    if (error) {
      console.log(error, 'Error during movie INSERT Func!');
      callback(error, null);
    } else {
      console.log(results, 'Inserted this into DB Success!!');
      callback(null, results);
    }
  })
};


connection.connect(error => {
  if (error) {
    console.log(error, 'Error connecting to the MYSQL DB!')
  }
  console.log('Connected to the DB! Success!!!');
});

module.exports = {
  getAllMovies,
  addMovie
};