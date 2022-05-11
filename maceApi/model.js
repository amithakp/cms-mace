var mongoose = require('mongoose');
  
var imageSchema = new mongoose.Schema({
    name: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
  
//Image is a model which has a schema imageSchema
  
module.exports = ImageModel = mongoose.model('Image', imageSchema);