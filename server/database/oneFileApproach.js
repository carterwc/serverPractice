const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  // host: 'local',
  database: 'mymovies'
});


const getAllMovies = (callback) => {
  const queryString = `SELECT * FROM My-Movies`;
  connection.query(queryString, (error, results) => {
    if (error) {
      console.log(error, 'Error getting All Movies from DB!');
      callback(error, null);
    } else {
      console.log(results, 'Results from getting all the movies Success!!!');
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
  });
};

connection.connect((error) => {
  if (error) {
    console.log(error, 'Error Connecting to DB!!!');
  } else {
    console.log('Connected to Db Successfully!!!');
  }
})


module.exports = {
  getAllMovies,
  addMovie
}