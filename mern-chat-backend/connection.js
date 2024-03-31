const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://vi-app:fVYLLlYn2trChOGH@cluster0.xtquxe8.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });