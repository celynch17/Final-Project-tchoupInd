$(document).ready(function(){
	// openNav()
	// closeNav()
	myMap()
});

function myMap(){
	var mapCanvas= document.getElementById("#map");
	var mapOptions= {
		center: new google.maps.LatLng(29.932062, -90.073916)
	};
	var map= new google.maps.Map(mapCanvas, mapOptions);
}
// function openNav(){
// 	console.log("This is working")
// 	$("#mySideNav").style.width="250px";
// 	console.log("This is now working")
// };

// function closeNav(){
// 	console.log("this also worked")
// 	//document.getElementById("mySideNav").style.width="0";
// }

https://www.google.com/maps/embed/v1/MODE?key=AIzaSyBbF9Wlif7kCsu0DPXMEcjQQF356jwwQpw&parameters