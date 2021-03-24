const mongoose = require('../_connection')
const express = require('express')
const router = express.Router()
const config = require('../config')
const array = require('../models/array.js')

router.use((req, res, next) => {
  res.locals = config
  next()
});

// route handler to home page that renders index.ejs
app.get('/', (req, res) => {
  res.render('pages/index', {pageTitle:"Home Page"});
})

// route handler to home page that renders another page
app.get('/pages/login', (req, res) => {
  res.render('pages/login', {pageTitle:"Login"});
})

// route handler to home page that renders another page
app.get('/register', (req, res) => {
  res.render('pages/register', {pageTitle:"Register"});
})

module.exports = router;