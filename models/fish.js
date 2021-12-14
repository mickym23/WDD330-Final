//Basic library model
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = mongoose.model('Fish', new Schema({
  imageUrl: {
    type: String,
    required: true
  }
}),
'fishing');
