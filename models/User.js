const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userInfo: { type: Types.ObjectId, ref: 'UserInfo'},
  items: [{ type: Types.ObjectId, ref: 'Item' }],
});

module.exports = model('User', schema);
