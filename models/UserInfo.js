const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  gender: { type: String, required: true },
  activity: { type: String, required: true },
  age: { type: String, required: true },
  owner: { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('UserInfo', schema);
