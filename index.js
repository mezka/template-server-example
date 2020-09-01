const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const app = express(feathers());
const MessageService = require('./services/MessageService');
const transformResponseDataToCsv = require('./middleware/transformResponseDataToCsv');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.configure(express.rest());

app.use('/messages', new MessageService(), transformResponseDataToCsv);
app.use(express.errorHandler());

app.listen(3030).on('listening', () =>
  console.log('Feathers server listening on localhost:3030')
);