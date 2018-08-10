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
	var menu = document.getElementById('navSideBar');
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
		
	var myArray=[{
		"title" : "Ditty Bag Tropical",
		"price" : "$20",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/Accessories/DittyBagTropical.jpeg",
		"description" : "Our popular Fanny Pack silhouette now available in tropical print outdoor upholstery fabric. This fabric is UV resistant, water resistant and will get you in the mood for summer.",
		"itemFeature" : "Secure Top Zip Closure, Adjustable Waist Belt, Front Slip Pocket and Accessory Loop, Custom Stainless Steel Hook Closure that Doubles as a Bottle Opener",
		"materials" : "Lightweight, Water Resistant & Durable Outdoor Upholstery Fabric, >Repurposed Auto Industry Nylon Strap, Custom 14 Gauge Stainless Steel Hook/Bottle Opener Made in Lafayette, LA"
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

		"title": "Esprit Pocket Leather",
		"price" : "$60",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/OvershoulderBags/EspritPocketLeather.jpg",
		"description": "Sized to keep your bare minimum essentials close at hand, this versatile pocket can be worn around the neck, crossbody, or attached at the hip. This item is made in a variety of canvas color combinations. Let us know if you have any color preference in the comments section of your order.",
		"itemFeature" : "Adjustable 5mm cord strap allows for 3 different styles of carry, Back panel belt loops (fits a belt up to 1.5' wide), Secret stash pocket, Handwoven accessory loop, Secure snap closure",
		"materials" : "Water Resistant Waxed Cotton Canvas, 5mm Nylon Cord, Genuine Cow Leather"
	},
	{
		"title": "Hand-Stitched Leather Card Wallet",
		"price" : "$45",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/Accessories/Hand-stitchedLeatherCardWallet.jpg",
		"description": "This hand-stitched leather card wallet was made by Bruce Hand Crafted Leather especially for Tchoup Industries.  When not working his full time construction job, Bruce Ducote handcrafts a variety of small leather goods in his Gonzales, Louisiana workshop. ",
		"itemFeature" : "V cut along top of card pockets for easy visibility, Sized to fit 2-3 cards on each side, but will stretch to accommodate more over time., Small and slim enough for front pocket, Vertical hand stitch detail orients front from back",
		"materials" : " "
	},
	{
		"title": "Roulez Pack Charcoal Rich Brown Leather",
		"price" : "$300",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/Backpacks/RoulezPackCharcoalwRichBrownLeather.jpg",
		"description": "Charcoal Canvas w/ Rich Brown Cowhide Leather",
		"itemFeature" : "Water Repellent Waxed Cotton Canvas Body Fabric, Double Padded Shoulder Strap and Back Panel for Comfort, Double Layer Bottom Panel for Durability, Heavy Duty Nylon Thread Construction, Secure Roll Top & Hook Closure with Built in Bottle Opener, Front Metal Zip Pocket for Small, Easy Access Items, Interior iPad Pocket Made from Repurposed Rice Bags, Interior Hand-Loomed Key Loop",
		"materials" : "Water Repellent Waxed Cotton Canvas Body Fabric, Genuine Leather, Repurposed Auto Industry Nylon Strap, Custom 14 Gauge Stainless Steel Hook/Bottle Opener Made in Lafayette, LA, Repurposed Rice Bag"
	},
	{
		"title": "Esprit Pocket Nutria",
		"price" : "$60",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/OvershoulderBags/EspritPocketNutria.jpg",
		"description": "Sized to keep your bare minimum essentials close at hand, this versatile pocket can be worn around the neck, crossbody, or attached at the hip. This item is made in a variety of canvas color combinations. Let us know if you have any color preference in the comments section of your order.",
		"itemFeature" : "Adjustable 5mm cord strap allows for 3 different styles of carry, Back panel belt loops (fits a belt up to 1.5' wide), Secret stash pocket, Handwoven accessory loop, Secure flap closure",
		"materials" : "Nutria fur pelt, Water Resistant Waxed Cotton Canvas, 5mm Nylon Cord, Genuine Cow Leather"
	}
	];

	console.log(myArray[arg]);


	var popUp =   "<div class='modal-content'>"
				+ "<span id='closeModal' style='color:black; font-size: 24px; margin:0px'> &times;</span>"
				+ "<div class='row'>"
				+ "<div class='col-sm-6 productCardmodal' id='featureModal'>"
				+ "<img src='" + myArray[arg].img + "' alt='featured item'>"
				+ "<div class='itemDescription' style='border:none;'>"
				+ "<h4 id='title'>"+myArray[arg].title + "</h4>"
				+ "<h5 id='productPrice'>" + myArray[arg].price + "</h5>"
				+ "<p id='description'>" + myArray[arg].description + "</p>"
				+ "</div>"
				+ "</div>"
				+ "<div class='col-sm-6 itemFeatures' style='display:inline-block'>"
				+ "<h5> Features </h5>"
				+ "<h6 id='itemFeature'>" +myArray[arg].itemFeature+ "</h6>"
				+ "<br>"
				+ "<h5>Materials</h5>"
				+ "<p id='materials'style='padding-bottom: 30px;font-size: 16px'>" +myArray[arg].materials+  "</p>"
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


