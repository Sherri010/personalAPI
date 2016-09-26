
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var placeSchema = new Schema({
	name: String,
	country: String,
	coordinates:{lat:Number ,long:Number},
    imgList: []
});

var Place = mongoose.model('Places',placeSchema);
module.exports = Place;