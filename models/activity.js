
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var activitySchema = new Schema({
	title:String,
	duration:String,
	discription:String
});

var Act = mongoose.model('activity' , activitySchema);

module.exports = Act;

