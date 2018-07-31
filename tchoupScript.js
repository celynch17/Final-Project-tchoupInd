$(document).ready(function(){
	openNav()
	closeNav()
});


function openNav(){
	console.log("This is working")
	$("#mySideNav").style.width="250px";
	console.log("This is now working")
};

function closeNav(){
	console.log("this also worked")
	//document.getElementById("mySideNav").style.width="0";
}