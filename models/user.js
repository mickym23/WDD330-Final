//Basic library model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
}),
'users');
