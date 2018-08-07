$(document).ready(function(){
	
	navBar()
	//showModal()
 //  productModal()
});


function productModal(){
	var modal = document.getElementById('productModal');
	var btn = document.getElementById('featureModal');
	var span = document.getElementById('close');
};

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

function showModal(arg){

	var modal = document.getElementById('productModal');
	var btn = document.getElementById('featureModal');

		modal.style.display = "block";
		
	var osbArray=[{
		"title" : "Adventure Tote Sail Cloth",
		"price" : "$140",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/OvershoulderBags/AdventureToteSailCloth.jpg",
		"description" : "This item has been designed with tote carry handles, a built in cross body strap, and a secure zip closure to make sure you're ready for adventure when you hit the beach, swamp, campsite or ski slopes.",
		"itemFeature" : "Tote Carry Handles, Adjustable Cross Body Shoulder Strap, Secure Top Zipper Closure, Double Layer Waxed Canvas Bottom Panel for Durability, Heavy Duty Nylon Thread Construction",
		"materials" : "Recycled Sail Cloth Body Fabric, Waxed Cotton Canvas Bottom Panel, Repurposed Auto Industry Nylon Strap"
	},
	{
		"title" : "Adventure Tote Tropical",
		"price" : "$140",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/OvershoulderBags/AdventureToteTropical.jpg",
		"description" : "This item has been designed with tote carry handles, a built in cross body strap, and a secure zip closure to make sure you're ready for adventure when you hit the beach, swamp, campsite or ski slopes.",
		"itemFeature" : "Tote Carry Handles, Adjustable Cross Body Shoulder Strap, Secure Top Zipper Closure, Double Layer Waxed Canvas Bottom Panel for Durability, Heavy Duty Nylon Thread Construction",		"materials" : "Recycled Sail Cloth Body Fabric, Waxed Cotton Canvas Bottom Panel, Repurposed Auto Industry Nylon Strap"	},
	{
		"title": "Esprit Pocket Sinker Cypress",
		"price" : "$60",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/OvershoulderBags/EspritPocketSinkerCypress.jpg",
		"description": "Featuring a sinker cypress wooden toggle closure made by GoodWood NOLA from logs recovered by Greg Guirard. Sized to keep your bare minimum essentials close at hand, this versatile pocket can be worn around the neck, crossbody, or attached at the hip.",
		"itemFeature" : "Adjustable 5mm cord strap allows for 3 different styles of carry, Back panel belt loops (fits a belt up to 1.5' wide), Secret stash pocket, Handwoven accessory loop, Secure toggle closure",
		"materials" : "Sinker Cypress Toggle by GoodWood NOLA, Water Resistant Waxed Cotton Canvas, 5mm Nylon Cord, Genuine Cow Leather"
	},
	{

		"title": "Esprit Pocket Woven",
		"price" : "$60",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/OvershoulderBags/EspritPocketWoven.jpg",
		"description": "Sized to keep your bare minimum essentials close at hand, this versatile pocket can be worn around the neck, crossbody, or attached at the hip.",
		"itemFeature" : "Adjustable 5mm cord strap allows for 3 different styles of carry, Back panel belt loops (fits a belt up to 1.5' wide), Secret stash pocket, Handwoven accessory loop, Secure toggle closure",
		"materials" : "One of a Kind Handwoven Panel, Water Resistant Waxed Cotton Canvas, 5mm Nylon Cord, Genuine Cow Leather"
	},
	{
		"title": "Flap Messenger Olive",
		"price" : "$300",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/OvershoulderBags/FlapMessengerOlive.jpg",
		"description": "Waxed Canvas",
		"itemFeature" : "Water Repellent Waxed Cotton Canvas Body Fabric, 1.5 inch Adjustable Shoulder Strap, Double Layer Bottom Panel for Durability, Heavy Duty Nylon Thread Construction, Two Large Front Pockets Protected by Flap Closure, Padded Interior Laptop Sleeve",
		"materials" : "Water Repellent Waxed Cotton Canvas Body Fabric, Repurposed Auto Industry Nylon Strap, Custom 14 Gauge Stainless Steel Hook/Bottle Opener Made in Lafayette, LA, Repurposed Rice Bag"
	},
	{
		"title": "Le Tour Purse Black w/ Leather",
		"price" : "$115",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/OvershoulderBags/LeTourPurseBlackwLeather.jpg",
		"description": "Leather w/ Waxed Canvas",
		"itemFeature" : "Water Repellent Waxed Cotton Canvas Body Fabric, 2 Interior Pockets for Organization, Adjustable Cross Body Shoulder Strap, Heavy Duty Nylon Thread Construction",
		"materials" : "Water Repellent Waxed Cotton Canvas Body Fabric, Repurposed Auto Industry Nylon Strap, Leather"
	},
	];

	console.log(osbArray[arg]);


	var popUp =   "<div class='modal-content'>"
				+ "<span id='closeModal' style='color:black; font-size: 24px; margin:0px'> &times;</span>"
				+ "<div class='row'>"
				+ "<div class='col-sm-6 productCardmodal' id='featureModal'>"
				+ "<img src='" + osbArray[arg].img + "' alt='featured item'>"
				+ "<div class='itemDescription' style='border:none;'>"
				+ "<h4 id='title'>"+osbArray[arg].title + "</h4>"
				+ "<h5 id='productPrice'>" + osbArray[arg].price + "</h5>"
				+ "<p id='description'>" + osbArray[arg].description + "</p>"
				+ "</div>"
				+ "</div>"
				+ "<div class='col-sm-6 itemFeatures' style='display:inline-block'>"
				+ "<h5> Features </h5>"
				+ "<h6 id='itemFeature'>" +osbArray[arg].itemFeature+ "</h6>"
				+ "<br>"
				+ "<h5>Materials</h5>"
				+ "<p id='materials'style='padding-bottom: 30px;font-size: 16px'>" +osbArray[arg].materials+  "</p>"
				+ "<button id='buyNowbtn'> Buy Now </button>"
				+ "</div>"
				+ "</div>"
				+ "</div>"
				+ "</div>";

	$("#productModal").empty(popUp);

	$("#productModal").append(popUp);
	

	var span = document.getElementById('closeModal');

	span.onclick = function(){
		modal.style.display="none"
	};

};

function newsletter(){

	alert("Thank you for signing up!")
	};


