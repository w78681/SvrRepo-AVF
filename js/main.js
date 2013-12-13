// Jeremy "Jay" Sweet
// Advance Visual Frameworks 1312
// Project 2 6 Dec 13

//instagram api
var instagramData = function(pictureInfo) {
	console.log(pictureInfo);	

	$("#instagram-message").html("Instagram results:");
	
	$.each(pictureInfo.data, function (index, photo) {
	var pictureStuff = "<li><img src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' class='sillyImageSize' /></li>";
	$("#instagramResults").append(pictureStuff);
	});
};

$(function() {
	var instaTag = "Food";
	var instaId = "872dc4b5f50f42e1af5505f454e12af2";
	var instaUrl = "https://api.instagram.com/v1/tags/" + instaTag + "/media/recent?callback=?&amp;client_id=" + instaId + "&amp;min_id=10";
	$.getJSON(instaUrl, instagramData);
});
//end instagram api
//food2fork api
var foodData = function(foodInfo) {
	var serial = JSON.stringify(foodInfo);
	console.log(serial);	

	$("#recipe-message").html("Recipe results:");
	
	$.each(foodInfo.recipes, function (index, food) {
	var recipeStuff = "<li><img src='" + food.image_url + "' alt='" + food.title + "' class='sillyImageSize' /></li>";
	$("#food2ForkResults").append(recipeStuff);
	});
};

$(function() {
	var foodTag = "Cake";
	var foodId = "675668d6b35b46c525aa967347be024c";
	var foodUrl = "http://food2fork.com/api/search?key=" + foodId + "&q=" + foodTag;
	$.getJSON(foodUrl, foodData);
});
//end food2fork api

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	$("#pageCamera").on("pageinit", function() {
		navigator.camera.getPicture(cameraSuccess, cameraFail, {sourceType:1,quality:60});		
	});
	$("#pageAcceleration").on("pageinit", function() {
		navigator.accelerometer.getCurrentAcceleration(accelerationSuccess, accelerationError);
	});
	$("#pageCompass").on("pageinit", function() {
		navigator.compass.getCurrentHeading(compassSuccess, compassError);
	});	
	$("#pageGeolocation").on("pageinit", function() {
		navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError);
	});
}
//camera
function cameraSuccess(imageData) {
    navigator.notification.alert('Picture snapped!', postPhoto, 'Picture Taken!', 'OK');
	var pictureSrc = "data:image/jpeg;base64," + imageData

	function postPhoto() {
		alert("post fired!" + pictureSrc);
		$("#cameraPicture").attr("src", pictureSrc).reload();
	};
};
function cameraFail(message) {
    alert('Camera failed to take a picture baecause, ' + message);
};
//end camera
//accelerometer
function accelerationSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' + 'Acceleration Y: ' + acceleration.y + '\n' + 'Acceleration Z: ' + acceleration.z + '\n');
	var accelerationStuff = "<li>Acceleration X: " + acceleration.x + "</li><br><li>Acceleration Y: " + acceleration.y + "</li><br><li>Acceleration Z: " + acceleration.z + "</li>";
	$("#accelerationResults").append(accelerationStuff);		
};
function accelerationError() {
    alert('Accelerometer encountered an error!');
};
//end accelerometer
//compass
function compassSuccess(heading) {
	alert('Heading: ' + heading.magneticHeading);
	var compassStuff = "<li>Heading: " + heading.magneticHeading + "</li>";
	$("#compassResults").append(compassStuff);		
};
function compassError(error) {
	alert('CompassError: ' + error.code);
};
//end compass

//geolocation
function geolocationSuccess(position) {
    alert('Latitude: ' + position.coords.latitude + '\n' + 'Longitude: ' + position.coords.longitude + '\n');
	var geolocationStuff = "<li>Latitude: " + position.coords.latitude + "</li><br><li>Longitude: " + position.coords.longitude + "</li>";
	$("#geolocationResults").append(geolocationStuff);		
};
function geolocationError(error) {
        alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
};
//end geolocation