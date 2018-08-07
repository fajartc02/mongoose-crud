const express = require('express')
const app = express()
const indexRoutes = require('./routes/index')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose_crud');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected with mongo');
});

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', indexRoutes)

app.listen(3000, () => { console.log('connect On port 3000') });
