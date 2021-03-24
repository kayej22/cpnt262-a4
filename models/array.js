const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema(
  {
    id:           Number,
    title:        String,
    description:  String,
    width:        String,
    height:       String,
    pathURL:      String,
    attribution:  {
      credit:     String,
      creditURL:  String,
    }
  }
);

const array =mongoose.model('array', gallerySchema);

module.exports = array;

