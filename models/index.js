var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

module.exports.Act = require("./activity.js");
module.exports.Place = require("./destination.js");

var Act = require('./activity.js');

var Place = require('./destination.js');

var Mashhad = new Place({
	name:"Mashhad",
	country: "Iran",
	coordinates:{lat:36.209 , long:59.700}
});

// Mashhad.save(function(err,place){
//   if(err) { console.log(err);}
//  // console.log(place.coordinates.lat);
// });

// var Tehran = new Place({
// 	name:"Tehran",
// 	country: "Iran",
// 	coordinates:{lat:35.461 , long:51.636}
// });

// Tehran.save(function(err,place){
//   if(err) { console.log(err);}
//  // console.log(place);
// });

// var Melbourne = new Place({
// 	name:"Melbourne",
// 	country: "Australia",
// 	coordinates:{lat: -37.689 , long: 145.042}
// });

// Melbourne.save(function(err,place){
//   if(err) { console.log(err);}
//  // console.log(place);
// });

// Adelaide = new Place({
// 	name:"Adelaide",
// 	country: "Australia",
// 	coordinates:{lat: -34.922 , long: 138.889}
// });

// Adelaide.save(function(err,place){
//   if(err) { console.log(err);}
//  // console.log(place);
// });


// Canberra = new Place({
// 	name:"Canberra",
// 	country: "Australia",
// 	coordinates:{lat: -35.425 , long: 149.128}
// });

// Canberra.save(function(err,place){
//   if(err) { console.log(err);}
//  // console.log(place);
// });

// Syndey =  new Place({
// 	name:"Syndey",
// 	country: "Australia",
// 	coordinates:{lat: -33.761 , long: 151.238}
// });

// Syndey.save(function(err,place){
//   if(err) { console.log(err);}
//  // console.log(place);
// });

// var Madison = new Place({
// 	name:"Madison",
// 	country: "United States",
// 	coordinates:{lat: 43.085 , long: -449.440}
// });

// Madison.save(function(err,place){
//   if(err) { console.log(err);}
//  // console.log(place);
// });

// var Milwaukee = new Place({
// 	name:"Milwaukee",
// 	country: "United States",
// 	coordinates:{lat: 42.989 , long: -447.968}
// });

// Milwaukee.save(function(err,place){
//   if(err) { console.log(err);}
//  // console.log(place);
// });

// var Chicago = new Place({
// 	name:"Chicago",
// 	country: "United States",
// 	coordinates:{lat: 41.853 , long: -447.682}
// });

// Chicago.save(function(err,place){
//   if(err) { console.log(err);}
// //  console.log(place);
// });


// var Minneapolis = new Place({
// 	name:"Minneapolis",
// 	country: "United States",
// 	coordinates:{lat: 44.992 , long: -453.425}
// });

// Minneapolis.save(function(err,place){
//   if(err) { console.log(err);}
//  // console.log(place);
// });

// var Duluth = new Place({
// 	name:"Duluth",
// 	country: "United States",
// 	coordinates:{lat: 46.762 , long: -452.126}
// });

// Duluth.save(function(err,place){
//   if(err) { console.log(err);}
// //  console.log(place);
// });

// var Seattle = new Place({
// 	name:"Seattle",
// 	country: "United States",
// 	coordinates:{lat: 47.547 , long: -482.366}
// });

// Seattle.save(function(err,place){
//   if(err) { console.log(err);}
// //  console.log(place);
// });

// var LosAngeles = new Place({
// 	name:"Los Angeles",
// 	country: "United States",
// 	coordinates:{lat: 34.016 , long: -478.235}
// });

// LosAngeles.save(function(err,place){
//   if(err) { console.log(err);}
//  // console.log(place);
// });

// var SanFrancisco = new Place({
// 	name:"San Francisco",
// 	country: "United States",
// 	coordinates:{lat: 37.719 , long: -482.454}
// });

// SanFrancisco.save(function(err,place){
//   if(err) { console.log(err);}
//  // console.log(place);
// });

// var IdahoFalls = new Place({
// 	name:"Idaho Falls",
// 	country: "United States",
// 	coordinates:{lat: 43.533 , long: -471.940}
// });

// IdahoFalls.save(function(err,place){
//   if(err) { console.log(err);}
//  // console.log(place);
// });


// var Reno = new Place({
// 	name:"Reno",
// 	country: "United States",
// 	coordinates:{lat: 39.538 , long: -479.828}
// });

// Reno.save(function(err,place){
//   if(err) { console.log(err);}
//  // console.log(place);
// });


// var RapidCity = new Place({
// 	name:"Rapid City",
// 	country: "United States",
// 	coordinates:{lat: 44.040 , long: -463.239}
// });

// RapidCity.save(function(err,place){
//   if(err) { console.log(err);}
//  // console.log(place);
// });


// var Cody = new Place({
// 	name:"Cody",
// 	country: "United States",
// 	coordinates:{lat: 44.504 , long: -469.023}
// });

// Cody.save(function(err,place){
//   if(err) { console.log(err);}
//  // console.log(place);
// });





