const mongoose = require('mongoose');
const validator = require('validator');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const UrlSchema = new mongoose.Schema({
  original_url: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Must be a valid url'
    }
  },
});

UrlSchema.plugin(AutoIncrement, { inc_field: 'short_url' });

module.exports = mongoose.model('url', UrlSchema);

