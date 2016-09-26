// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

 var db = require('./models');
 
/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));


/// hardcoded profile json
 var myProfile = {
   name: 'Sherri Aminshahidy',
   githubLink: "https://github.com/Sherri010",
   githubProfileImage: "https://avatars1.githubusercontent.com/u/11318814?v=3&s=466",
   personalSiteLink:"https://www.linkedin.com/in/sherri-aminshahidy-a2bbab73",
   currentCity: "San Francisco",
   pets: [{name:"velvet" , type : "cat" , breed: "short hair"},
          {name:"juju" ,type : "cat" , breed: "short hair"}]
 };

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {

  res.sendFile(__dirname + '/views/index.html');

});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false,
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    baseUrl: "https://sherri-personal-api.herokuapp.com/", 
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, 
      {method: "GET", path: "/api/places/", description:"Index all cities"},
      {method: "GET", path: "/api/places/:name", description:"Show details of one city using parameterized url"},
      {method: "GET", path: "/api/places?key=value", description:"Show details of one city using query strings"},
      {method: "POST", path: "/api/places/", description:"Create a new city"},
      {method: "PUT", path: "/api/places/:id", description:"Update city"},
      {method: "DELETE", path: "/api/places/:id", description:"Destroy a city"},
    ]
  })
});

app.get('/api/profile/',function profileInfo(req,res){
    res.json(myProfile);
})

app.get('/api/activities/',function activityList(req,res){
    db.Act.find({},function(err,list){
      if(err){console.log(err);}
      res.json(list);
    })
});

///About places:

//show
app.get('/api/places/:name',function(req,res){
   var nameToFind = req.params.name;
   if(nameToFind.length > 1){
     db.Place.find({name:nameToFind},function(err,place){
       if(err){console.log(err);}
       res.json(place);
     });
   }
});

app.get('/api/places',function(req,res){
  var limits = (+req.query.limit > 0)? (+req.query.limit):0; 
  console.log(limits);
  db.Place.find(req.query,function(err,list){
    if(err) { console.log(err);}
      res.json(list);
    
  });//.limit(limits); 

});
//index
app.get('/api/places/',function(req,res){
  db.Place.find({},function(err,list){
    if(err){ console.log(err)}
      res.json(list);
  });
});

//create
app.post('/api/places/',function(req,res){
  //var newPlace = new Place();

  db.Place.create(req.body,function(err,saved){
    if(err){console.log(err);}
    res.json(saved);
  });
});

//update
app.put('/api/places/:id',function(req,res){
  var idToUpdate = req.params.id;
  db.Place.findOne({_id:idToUpdate},function(err,found){
    found.name = req.body.name,
    found.country = req.body.country,
    found.coordinates = req.body.coordinates,
    found.imgList = req.body.imgList

    found.save(function(err,updated){
      res.json(updated);
    });
  });
});

//destroy
app.delete('/api/places/:id',function(req,res){
   var idToRemove = req.params.id;
   db.Place.findOneAndRemove({_id:idToRemove},function(err,removed){
    res.json(removed);
   });
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
