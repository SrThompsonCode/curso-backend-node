const express = require('express');
const cors = require('cors');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');
const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

//AGREGAMOS MIDDLEWARE PARA QUE EXPRESS ENTIENDA JSON
//body parser
app.use(express.json());
app.use(cors());

//Los middleware de error siempre tiene que ir al final de las rutas
//Error middlewares
app.use(wrapErrors);
app.use(errorHandler);
app.use(logErrors);

moviesApi(app);

//Catch 404 Error
app.use(notFoundHandler);

// app.get('/', function (req, res) {
//   res.send('hello world');
// });
// app.get('/json', function (req, res) {
//   res.json('hello world json');
// });

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
