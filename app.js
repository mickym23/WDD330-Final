// This is the main app for WDD330 Node.js Project
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

// Using EJS template
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'public')));

const corsOptions = {
   origin: "https://kifaruadventures.herokuapp.com/",
   optionsSuccessStatus: 200
};
app.use(cors(corsOptions));


// PORT for Heroku or Localhost
const PORT = process.env.PORT || 3000;

// Routes
const shopRoutes = require('./routes/shop');
app.use(shopRoutes);

const options = {
   useUnifiedTopology: true,
   useNewUrlParser: true,
   autoIndex: false
};

// Connect to db via Mongoose
mongoose.connect(
   MONGODB_URI, options
)
.then(result => {
   // Connected to Port
   console.log(`Connected on Port:${PORT}!`);
   app.listen(PORT);
})
.catch(err => {
   console.log(err);
})
