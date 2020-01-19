const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const dbConfig = require('../config');

const app = express();

mongoose.connect('mongodb+srv://user:pswd@cluster0-8dbgc.mongodb.net/back?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json()); // the app will use the json format
app.use(routes); // the app will have access to the routes created

app.listen(3333);