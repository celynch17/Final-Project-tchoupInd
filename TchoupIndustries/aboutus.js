$(document).ready(function(){

	navBar()
	name()
	materials()
	environment()
	explore()
});

function navBar(){
	var open = document.getElementById('menuBar');
	var menu = document.getElementById('navSideBar')
	var close = document.getElementById('hideMenu');

	close.onclick = function(){
		menu.style.display = "none";
	}
	open.onclick = function(){
		menu.style.display="block";
	}
};

function name(){
	$("#accordion").click(function(){
		$("#ourName").fadeToggle("slow");
});
}
function materials(){
	$("#materials").click(function(){
		$("#ourMaterials").fadeToggle("slow")
	});
}
function environment(){
	$("#environmental").click(function(){
		$("#theEnvironment").fadeToggle("slow")
	});
}
function explore(){
	$("#exploration").click(function(){
		$("#explore").fadeToggle("slow")
	});
}
