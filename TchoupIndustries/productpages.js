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
		
	var backpackArray=[{
		"title" : "Convertible Mini Flap Pack Black",
		"price" : "$100",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/Backpacks/ConvertibleMiniFlapPackBlack.jpg",
		"description" : "We redesigned our Mini Flap Pack so that you can wear it as a satchel or a backpack!",
		"itemFeature" : "Water Repellent Waxed Cotton Canvas Body Fabric, Adjustable Shoulder Straps, Heavy Duty Nylon Thread Construction, Secure Flap & Hook Closure with Built in Bottle Opener, Two Interior Organization Pocket, One Exterior Quick Access Pocket",
		"materials" : "Water Repellent Waxed Cotton Canvas Body Fabric, Repurposed Auto Industry Nylon Strap, Custom 14 Gauge Stainless Steel Hook/Bottle Opener Made in Lafayette, LA"
	},
	{
		"title": "Convertible Mini Flap Pack Charcoal",
		"price" : "$100",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/Backpacks/ConvertibleMiniFlapPackCharcoal.jpg",
		"description": "Oak Waxed Canvas. We redesigned our Mini Flap Pack so that you can wear it as a satchel or a backpack!",
		"itemFeature" : "Water Repellent Waxed Cotton Canvas Body Fabric, Adjustable Shoulder Straps, Heavy Duty Nylon Thread Construction, Secure Flap & Hook Closure with Built in Bottle Opener, Two Interior Organization Pocket, One Exterior Quick Access Pocket",
		"materials" : "Repurposed Auto Industry Nylon Strap, Custom 14 Gauge Stainless Steel Hook/Bottle Opener Made in Lafayette, LA"
	},
	{
		"title": "Convertible Mini Flap Pack Oak",
		"price" : "$50",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/Backpacks/ConvertibleMiniFlapPackOak.jpg",
		"description": "Oak Waxed Canvas. We redesigned our Mini Flap Pack so that you can wear it as a satchel or a backpack!",
		"itemFeature" : "Water Repellent Waxed Cotton Canvas Body Fabric, Adjustable Shoulder Straps, Heavy Duty Nylon Thread Construction, Secure Flap & Hook Closure with Built in Bottle Opener, Two Interior Organization Pocket, One Exterior Quick Access Pocket",
		"materials" : "Repurposed Auto Industry Nylon Strap, Custom 14 Gauge Stainless Steel Hook/Bottle Opener Made in Lafayette, LA"
	},
	{

		"title": "Convertible Mini Flap Olive",
		"price" : "$100",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/Backpacks/ConvertibleMiniFlapPackOlive.jpg",
		"description": "Oak Waxed Canvas. We redesigned our Mini Flap Pack so that you can wear it as a satchel or a backpack!",
		"itemFeature" : "Water Repellent Waxed Cotton Canvas Body Fabric, Adjustable Shoulder Straps, Heavy Duty Nylon Thread Construction, Secure Flap & Hook Closure with Built in Bottle Opener, Two Interior Organization Pocket, One Exterior Quick Access Pocket",
		"materials" : "Repurposed Auto Industry Nylon Strap, Custom 14 Gauge Stainless Steel Hook/Bottle Opener Made in Lafayette, LA"
	},
	{
		"title": "Roulez Pack Charcoal Rich Brown Leather",
		"price" : "$300",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/Backpacks/RoulezPackCharcoalwRichBrownLeather.jpg",
		"description": "Charcoal Canvas w/ Rich Brown Cowhide Leather",
		"itemFeature" : "Water Repellent Waxed Cotton Canvas Body Fabric, Double Padded Shoulder Strap and Back Panel for Comfort, Double Layer Bottom Panel for Durability, Heavy Duty Nylon Thread Construction, Secure Roll Top & Hook Closure with Built in Bottle Opener, Front Metal Zip Pocket for Small, Easy Access Items, Interior iPad Pocket Made from Repurposed Rice Bags, Interior Hand-Loomed Key Loop",
		"materials" : "Recycled Sailcloth Body Fabric, Double Padded Shoulder Strap and Back Panel for Comfort, Double Layer Waxed Canvas Bottom Panel for Durability, Heavy Duty Nylon Thread Construction, Secure Flap & Hook Closure with Built in Bottle Opener, Two Huge Front Pockets Protected by Flap Closure, Interior iPad Pocket & Key Loop"
	},
	{
		"title": "Flap Pack Recycled Sail Cloth",
		"price" : "$195",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/Backpacks/FlapPackRecycledSailcloth.jpg",
		"description": "Our recycled sail cloth has previously been used out in the elements and on open water. Some staining and wear may be visible, we like the character it adds to this product.",
		"itemFeature" : "Recycled Sailcloth Body Fabric, Double Padded Shoulder Strap and Back Panel for Comfort, Double Layer Waxed Canvas Bottom Panel for Durability, Heavy Duty Nylon Thread Construction, Secure Flap & Hook Closure with Built in Bottle Opener, Two Huge Front Pockets Protected by Flap Closure, Interior iPad Pocket & Key Loop",
		"materials" : "Recycled Sailcloth Body Fabric, Waxed Cotton Canvas Bottom Panel, Repurposed Auto Industry Nylon Strap, Custom 14 Gauge Stainless Steel Hook/Bottle Opener Made in Lafayette, LA, Repurposed Rice Bag"
	},
	];

	console.log(backpackArray[arg]);


	var popUp =   "<div class='modal-content'>"
				+ "<span id='closeModal' style='color:black; font-size: 24px; margin:0px'> &times;</span>"
				+ "<div class='row'>"
				+ "<div class='col-sm-6 productCardmodal' id='featureModal'>"
				+ "<img src='" + backpackArray[arg].img + "' alt='featured item'>"
				+ "<div class='itemDescription' style='border:none;'>"
				+ "<h4 id='title'>"+backpackArray[arg].title + "</h4>"
				+ "<h5 id='productPrice'>" + backpackArray[arg].price + "</h5>"
				+ "<p id='description'>" + backpackArray[arg].description + "</p>"
				+ "</div>"
				+ "</div>"
				+ "<div class='col-sm-6 itemFeatures' style='display:inline-block'>"
				+ "<h5> Features </h5>"
				+ "<h6 id='itemFeature'>" +backpackArray[arg].itemFeature+ "</h6>"
				+ "<br>"
				+ "<h5>Materials</h5>"
				+ "<p id='materials'style='padding-bottom: 30px;font-size: 16px'>" +backpackArray[arg].materials+  "</p>"
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


