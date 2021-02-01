const express = require('express');
const app = express();
// const cors = require('cors');

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

//AGREGAMOS MIDDLEWARE PARA QUE EXPRESS ENTIENDA JSON
//Body Parser
app.use(express.json());

moviesApi(app);

// app.get('/', function (req, res) {
//   res.send('hello world');
// });
// app.get('/json', function (req, res) {
//   res.json('hello world json');
// });

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
