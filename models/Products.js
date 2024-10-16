
const mongoose = require('mongoose');




const visitSchema = new mongoose.Schema({
    count: { type: Number, default: 0 },
  });
  
  const Visit = mongoose.model('visit', visitSchema);
  module.exports = Visit;




