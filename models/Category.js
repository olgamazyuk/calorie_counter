const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String, required: true },
  type: { type: Number, required: true },
  calories: { type: Number, required: true },
});

module.exports = model('Category', schema);
