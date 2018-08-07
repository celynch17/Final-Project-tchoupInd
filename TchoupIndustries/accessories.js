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
		
	var accessoryArray=[{
		"title" : "Canvas Folding Wallet",
		"price" : "$40",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/Accessories/CanvasFoldingWallet.jpg",
		"description" : "Water Repellent Waxed Canvas w/ Recycled Bike Tube Interior Pockets. This item is made from Remnant Fabrics and colors may vary. Please leave a comment with your order if you have any color preferences.",
		"itemFeature" : "Water Repellent Waxed Cotton Canvas Body Fabric, 2 Interior Card Pockets, 2 Exterior Quick Access Card Pockets, Bill Pocket, Slim Design, Heavy Duty Nylon Thread Construction",
		"materials" : "Water Repellent Waxed Cotton Canvas Body Fabric, Recycled Bicycle Tube Interior Pockets"
	},
	{
		"title" : "Ditty Bag Tropical",
		"price" : "$60",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/Accessories/DittyBagTropical.jpeg",
		"description" : "Our popular Fanny Pack silhouette now available in tropical print outdoor upholstery fabric. This fabric is UV resistant, water resistant and will get you in the mood for summer.",
		"itemFeature" : "Secure Top Zip Closure, Adjustable Waist Belt, Front Slip Pocket and Accessory Loop, Custom Stainless Steel Hook Closure that Doubles as a Bottle Opener",
		"materials" : "Lightweight, Water Resistant & Durable Outdoor Upholstery Fabric, >Repurposed Auto Industry Nylon Strap, Custom 14 Gauge Stainless Steel Hook/Bottle Opener Made in Lafayette, LA"
	},
	{
		"title": "Fanny Pack Black w/ Leather Panel",
		"price" : "$60",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/Accessories/FannyPackBlackwLeatherPanel.jpg",
		"description": "Black Waxed Canvas with Genuine Leather Panel",
		"itemFeature" : "Secure Top Zip Closure, Adjustable Waist Belt, Front Slip Pocket and Accessory Loop, Custom Stainless Steel Hook Closure that Doubles as a Bottle Opener",
		"materials" : "Genuine Leather, Water Resistant Waxed Cotton Canvas, Repurposed Auto Industry Nylon Strap, Custom 14 Gauge Stainless Steel Hook/Bottle Opener Made in Lafayette, LA"
	},
	{

		"title": "Fanny Pack Tropical",
		"price" : "$80",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/Accessories/FannyPackTropical.jpg",
		"description": "Our popular Fanny Pack silhouette now available in tropical print outdoor upholstery fabric. This fabric is UV resistant, water resistant and will get you in the mood for summer. ",
		"itemFeature" : "Secure Top Zip Closure, Adjustable Waist Belt, Front Slip Pocket and Accessory Loop, Custom Stainless Steel Hook Closure that Doubles as a Bottle Opener",
		"materials" : "Lightweight, Water Resistant & Durable Outdoor Upholstery Fabric, Repurposed Auto Industry Nylon Strap, Custom 14 Gauge Stainless Steel Hook/Bottle Opener Made in Lafayette, LA"
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
		"title": "Travel Dog Bowl",
		"price" : "$30",
		"img": "/Users/christianlynch/Desktop/CodeCert/TchoupIndustries/Images/Accessories/TravelDogBowl.jpg",
		"description": "Perfect for your pup on the go. This bowl was designed with pleats instead of stitched seams so it can hold water without leaks.",
		"itemFeature" : "Water resistant waxed canvas holds water for hours, Lightweight & collapsible for travel, Handwoven accessory loop for clipping to bag or hang drying, Durable materials & construction",
		"materials" : "Water Resistant Waxed Cotton Canvas, Up-cycled seatbelt strap webbing, Handwoven accessory loop"
	},
	];

	console.log(accessoryArray[arg]);


	var popUp =   "<div class='modal-content'>"
				+ "<span id='closeModal' style='color:black; font-size: 24px; margin:0px'> &times;</span>"
				+ "<div class='row'>"
				+ "<div class='col-sm-6 productCardmodal' id='featureModal'>"
				+ "<img src='" + accessoryArray[arg].img + "' alt='featured item'>"
				+ "<div class='itemDescription' style='border:none;'>"
				+ "<h4 id='title'>"+accessoryArray[arg].title + "</h4>"
				+ "<h5 id='productPrice'>" + accessoryArray[arg].price + "</h5>"
				+ "<p id='description'>" + accessoryArray[arg].description + "</p>"
				+ "</div>"
				+ "</div>"
				+ "<div class='col-sm-6 itemFeatures' style='display:inline-block'>"
				+ "<h5> Features </h5>"
				+ "<h6 id='itemFeature'>" +accessoryArray[arg].itemFeature+ "</h6>"
				+ "<br>"
				+ "<h5>Materials</h5>"
				+ "<p id='materials'style='padding-bottom: 30px;font-size: 16px'>" +accessoryArray[arg].materials+  "</p>"
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


