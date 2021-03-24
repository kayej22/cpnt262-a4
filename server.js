const path = require('path');
const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Arrays = require('./data/Arrays');
const mongoose = require('./_connection.js')



const app = express();
const array = require('./models/array.js')

// Cors App should this go above view engine?
app.use(cors());

// EJS view engine
app.set('view engine', 'ejs')

// Site info
app.use((req, res, next) => {
  res.locals = {
    siteTitle: 'Kaye Creative',
    tagline: 'Creative solutions',
    copyright: 'Joel Kaye. MIT License'
  }
  next()
})

// joins pages? research answer
app.use(express.static(path.join(__dirname,'public')))

// accessing database
var db = mongoose.connection;


// JSON -index
app.get('/', (req, res) => {
  res.render('pages/index');
})
// JSON -login    
app.get('/login', (req, res) => {
  res.render('pages/login');
})
// JSON -register
app.get('/register', (req, res) => {
  res.render('pages/register');
})

// JSON Array-> 
app.get('/api/v0/Arrays', (req, res) => {
  array.find({},(err, Arrays) => {
    if (err) {
      res.sendStatus(404)
    }
    else {
      res.json(Arrays);
    }
  });
});



// 404 
app.use(function(req, res) {
  res.status(404);
  res.send('404 page not found');
});

// port
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}.`)
})


