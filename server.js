const express = require('express');
const app = express();
const mongoose = require('mongoose');

const url_bd = require('./src/config/config')
const createEvent = require('./src/Routes/createEvent/createEvent');
const listEvents = require('./src/Routes/listEvents/listEvents');
const event = require('./src/Routes/event/event');

mongoose.connect(url_bd,{ useNewUrlParser: true })




app.use(express.json());

app.use('/api/event/', event);
app.use('/api/events/', listEvents);
app.use('/api/createEvent/', createEvent);





app.listen(3000, () => console.log('Server Online'))

module.exports = app