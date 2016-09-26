console.log("Sanity Check: JS is working!");

$(document).ready(function(){
$('#form').hide();
var profileData;
//main div to show contnets for each tab
var main = $('#main');
//preparing my locations tap containers
var map = document.createElement('div');
map.setAttribute("id","map");
//intro to places tab
var discription = document.createElement('p');
discription.textContent= " Here are the places I've been during the last 5 years! ";
discription.setAttribute('class','discription');

//preparing template
var source = $('#places-discription').html();
var APIspurce = $('#API-discription').html();
var template,compiled;


//getting profile data 
$.ajax({
		type:"GET",
		url:"/api/profile",
		data:[],
		success:function(data){
			profileData = data;
			$('#profileimg').attr('src',data.githubProfileImage);
			
		}
	});


// on click, the information will be added to the page
  $('#profile').on('click',function(e){
  		e.preventDefault();
  		main.html("");
  		console.log(profileData);
  		var heading = document.createElement('h3');
        heading.textContent="About Me";
        heading.setAttribute('class','prohead');

	    main.append(heading);
	     main.append('<a class="links" target="blank" href="'+profileData.githubLink+'"> Github </a>');
	     main.append('<a class="links"target="blank2" href="'+profileData.personalSiteLink+'"> LinkedIn </a>');
	     main.append('<p> Currently living in '+ profileData.currentCity+'.</p>');
	     main.append('<img class="sf" src="../images/sf.jpg">');
	  
  });

//request places info
   $('#places').on('click',function(e){
   		e.preventDefault();
   		main.html("");
   		$('#form').show();
   		main.append(discription);
   		main.append(map);
        map = new google.maps.Map(document.getElementById('map'), {
           center: {lat: 37.78, lng: -122.44},
           zoom: 3
        });

        var LatLng={lat:0,lng:0};

   		$.ajax({
		type:"GET",
		url:"/api/places",
		data:[],
		success:function(data){
			console.log(data[0].name,data[0].country,data[0]._id)
		   for(var key in data){
		   	console.log(data[key].name, " " , data[key].coordinates.lat, " ",data[key].coordinates.long);
                LatLng.lat = data[key].coordinates.lat;
                LatLng.lng = data[key].coordinates.long;

		        var marker = new google.maps.Marker({
		           position: LatLng,
		           map: map,
		     	  });

		  	 }
		  	 	tamplate = Handlebars.compile(source);
    		    compiled = tamplate({place:data});
    		    console.log(compiled);
     			$('#main').append(compiled);

			}//success
		});//ajax

  });


  $('#myapi').on('click',function(e){
  	  	e.preventDefault();
        main.html("");
        $.ajax({
			type:"GET",
			url:"/api",
			data:[],
			success:function(data){
				
			  	 	tamplate = Handlebars.compile(APIspurce);
	    		    compiled = tamplate({rout:data.endpoints});
	    		    console.log(compiled);
	     			$('#main').append(compiled);

				}//success
		});//ajax

  });

$('#cityform').on('submit',function(e){
	e.preventDefault();
	//console.log($('#cityform').serialize() );
	var newCity = {name : $('#name').val(),
				   country:$('#country').val(),
				   coordinates:{lat:$('#lat').val(),
				   long:$('#long').val()}
				};
	 $.ajax({
			type:"POST",
			url:"/api/places/",
			data:newCity,
			success:function(data){
				alert(data.name ," has been added!");
			}
		});
});

});
