window.onload = rotate;

var indexOfPic = 0;
var restaurantImages = new Array("images/rest1.jpg","images/rest2.jpg","images/rest3.jpg","images/rest4.jpg", "images/rest5.jpg");

function rotate() {	
	document.getElementById("restaurants").src = restaurantImages[indexOfPic];
	indexOfPic++;
	
	if (indexOfPic == restaurantImages.length) {
		indexOfPic = 0;
	}
	setTimeout(rotate, 2 * 2000);
} 