const mongoose = require('./_connection.js') 

// Import seed data
const Arrays = require(`./seeds/Arrays.js`);

// Define model
const array = require(`./models/array.js`);


array.insertMany(Arrays, function(error, array) {
  console.log('Data import completed.')
  mongoose.connection.close();
});