const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blog-api');

// Routes
app.use(postRoutes);

module.exports = app;
