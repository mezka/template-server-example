const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const app = express(feathers());
const EstimateService = require('./services/EstimateService');
const transformResponseDataToPDF = require('./middleware/transformResponseDataToPDF');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());

app.use('/estimate', new EstimateService(), transformResponseDataToPDF);

app.use(express.errorHandler());

app.listen(8000).on('listening', () =>
  console.log('Feathers server listening on localhost:8000')
);