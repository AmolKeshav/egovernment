const express = require('express');
const app = express();
const path = require('path');
const volleyball = require('volleyball');
const PORT = 9001;

app.use(volleyball);
app.use(express.static(path.resolve(__dirname, '..', 'client')));
app.use(express.static(path.resolve(__dirname, '..', 'node_modules')));
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'))
});
app.listen(process.env.PORT || PORT, function () {
  console.log("Your server is running on port " + PORT);
});
