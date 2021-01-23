const express = require('express');
const app = express();
const { config } = require('./config/index');

const isLeapYear = (year) => {
  if (year % 400 == 0) return true;

  if (year % 100 == 0) return false;

  if (year % 4 == 0) return true;

  return false;
};

app.get('/', function (req, res) {
  res.send(
    `Place a year after the url and find out if it is leap year example: http://localhost:${config.port}/1994`
  );
});

app.get('/:year', function (req, res) {
  const { year } = req.params;
  const leapYear = isLeapYear(year);
  res.send(leapYear == true ? 'Is Leap!!!' : 'FUCK!');
});

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
