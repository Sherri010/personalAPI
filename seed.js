// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })


var db = require('./models');
var act = {name:"eating"};

db.Act.create(act , function(err,done){

	if(err){ console.log(err);}
	console.log(done._id);
});

var act = {name:"playing"};

db.Act.create(act , function(err,done){

	if(err){ console.log(err);}
	console.log(done._id);
});

var act = {name:"sleeping"};

db.Act.create(act , function(err,done){

	if(err){ console.log(err);}
	console.log(done._id);
})

db.Act.find({name:"sleeping"},function(err,a){
	if(err) console.log(err);
	console.log(a);
})

// // places:

// var Mashhad = { name:"Mashhad",
// 	country: "Iran",
// 	coordinates:{lat:36.209 , long:59.700}
// };

// var Tehran = {
// 	name:"Tehran",
// 	country: "Iran",
// 	coordinates:{lat:35.461 , long:51.636}
// };

// var Melbourne = {
// 	name:"Melbourne",
// 	country: "Australia",
// 	coordinates:{lat: -37.689 , long: 145.042}
// };

// var Adelaide = {
// 	name:"Adelaide",
// 	country: "Australia",
// 	coordinates:{lat: -34.922 , long: 138.889}
// };

// var Canberra = {
// 	name:"Canberra",
// 	country: "Australia",
// 	coordinates:{lat: -35.425 , long: 149.128}
// };


// var Syndey =  {
// 	name:"Syndey",
// 	country: "Australia",
// 	coordinates:{lat: -33.761 , long: 151.238}
// };

// var Madison = {
// 	name:"Madison",
// 	country: "United States",
// 	coordinates:{lat: 43.085 , long: -449.440}
// };

// var Milwaukee = {
// 	name:"Milwaukee",
// 	country: "United States",
// 	coordinates:{lat: 42.989 , long: -447.968}
// };

// var Chicago = {
// 	name:"Chicago",
// 	country: "United States",
// 	coordinates:{lat: 41.853 , long: -447.682}
// };

// var Minneapolis = {
// 	name:"Minneapolis",
// 	country: "United States",
// 	coordinates:{lat: 44.992 , long: -453.425}
// };

// var Duluth = {
// 	name:"Duluth",
// 	country: "United States",
// 	coordinates:{lat: 46.762 , long: -452.126}
// };

// var Seattle = {
// 	name:"Seattle",
// 	country: "United States",
// 	coordinates:{lat: 47.547 , long: -482.366}
// };


// var LosAngeles = {
// 	name:"Los Angeles",
// 	country: "United States",
// 	coordinates:{lat: 34.016 , long: -478.235}
// };

// var SanFrancisco = {
// 	name:"San Francisco",
// 	country: "United States",
// 	coordinates:{lat: 37.719 , long: -482.454}
// };


// var IdahoFalls = {
// 	name:"Idaho Falls",
// 	country: "United States",
// 	coordinates:{lat: 43.533 , long: -471.940}
// };


// var Reno = {
// 	name:"Reno",
// 	country: "United States",
// 	coordinates:{lat: 39.538 , long: -479.828}
// };



// var RapidCity = {
// 	name:"Rapid City",
// 	country: "United States",
// 	coordinates:{lat: 44.040 , long: -463.239}
// };


// var Cody = {
// 	name:"Cody",
// 	country: "United States",
// 	coordinates:{lat: 44.504 , long: -469.023}
// };

// db.Place.insert(Mashhad);



// ///,Tehran,Syndey, Melbourne,Canberra,Adelaide,
// 	Madison,Chicago,Milwaukee,Duluth,Cody,RapidCity,IdahoFalls,Reno,
// 	SanFrancisco,LosAngeles,Seattle