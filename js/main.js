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

//camera geolocation map
function cameraMashupSuccess(imageData) {
	function postPhoto() {
		function geolocationMashupSuccess(position) {
			var geolocationStuff = '<li><iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/?ie=UTF8&amp;ll=' + position.coords.latitude + ',' + position.coords.longitude + '&amp;spn=0.723251,0.65094&amp;t=h&amp;z=11&amp;output=embed"></iframe><br /></li>';
			$("#cameraGeoMapsResults").append(geolocationStuff);		
		};
		function geolocationMashupError(error) {
		    navigator.notification.alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n', null, 'Location', 'OK');
		};
		navigator.geolocation.getCurrentPosition(geolocationMashupSuccess, geolocationMashupError);
		$("#cameraPicResults").attr("src", imageData);		
	};
    navigator.notification.alert('Picture snapped!', postPhoto, 'Camera', 'OK');
};
function cameraMashupFail(message) {
    navigator.notification.alert('Camera failed to take a picture baecause, ' + message, null, 'Camera', 'OK');
};
//end camera geolocation map

//geoinstagram mashup
function geolocationMashupSuccess(position) {
    navigator.notification.alert('Latitude: ' + position.coords.latitude + '\n' + 'Longitude: ' + position.coords.longitude + '\n', null, 'Location', 'OK');
	var instagramMashupData = function(pictureMashupInfo) {
		$("#instagramMashupMessage").html("Search Location: " + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude);
	
	$.each(pictureMashupInfo.data, function (index, photo) {
		var pictureStuff = "<li><img src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' class='sillyImageSize' /></li>";
		$("#instagramMashupResults").append(pictureStuff);
	});
};
$(function() {
	var instaLat = position.coords.latitude;
	var instaLong = position.coords.longitude;
	var instaId = "872dc4b5f50f42e1af5505f454e12af2";
		// mine https://api.instagram.com/v1/media/search?lat=34.99225&lng=-78.99286&client_id=872dc4b5f50f42e1af5505f454e12af2
	var instaUrl = "https://api.instagram.com/v1/media/search?lat=" + instaLat + "&lng=" + instaLong + "&client_id=" + instaId;
	$.getJSON(instaUrl, instagramMashupData);
});
};
function geolocationMashupError(error) {
    navigator.notification.alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n', null, 'Location', 'OK');
};
//geoinstagram mashup end

//camera
function cameraSuccess(imageData) {
	function postPhoto() {
		$("#cameraPicture").attr("src", imageData).reload();
	};
    navigator.notification.alert('Picture snapped!', postPhoto, 'Camera', 'OK');
};
function cameraFail(message) {
    navigator.notification.alert('Camera failed to take a picture baecause, ' + message, null, 'Camera', 'OK');
};
//end camera

//accelerometer
function accelerationSuccess(acceleration) {
    navigator.notification.alert('Acceleration X: ' + acceleration.x + '\n' + 'Acceleration Y: ' + acceleration.y + '\n' + 'Acceleration Z: ' + acceleration.z + '\n', null, 'Accelerometer', 'OK');
	var accelerationStuff = "<li>Acceleration X: " + acceleration.x + "</li><br><li>Acceleration Y: " + acceleration.y + "</li><br><li>Acceleration Z: " + acceleration.z + "</li>";
	$("#accelerationResults").append(accelerationStuff);		
};
function accelerationError() {
    navigator.notification.alert('Accelerometer encountered an error!', null, 'Accelerometer', 'OK');
};
//end accelerometer

//compass
function compassSuccess(heading) {
    navigator.notification.alert('Heading: ' + heading.magneticHeading, null, 'Compass', 'OK');
	var compassStuff = "<li>Heading: " + heading.magneticHeading + "</li>";
	$("#compassResults").append(compassStuff);		
};
function compassError(error) {
    navigator.notification.alert('CompassError: ' + error.code, null, 'Compass', 'OK');
};
//end compass

//geolocation
function geolocationSuccess(position) {
    navigator.notification.alert('Latitude: ' + position.coords.latitude + '\n' + 'Longitude: ' + position.coords.longitude + '\n', null, 'Location', 'OK');
	var geolocationStuff = "<li>Latitude: " + position.coords.latitude + "</li><br><li>Longitude: " + position.coords.longitude + "</li>";
	$("#geolocationResults").append(geolocationStuff);		
};
function geolocationError(error) {
    navigator.notification.alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n', null, 'Location', 'OK');
};
//end geolocation

function onDeviceReady() {
	$("#pageCameraGeoMaps").on("pageinit", function() {
		navigator.camera.getPicture(cameraMashupSuccess, cameraMashupFail, {sourceType:1,quality:60});		
	});
	$("#pageInstagramGeo").on("pageinit", function() {
		navigator.geolocation.getCurrentPosition(geolocationMashupSuccess, geolocationMashupError);
	});
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
document.addEventListener("deviceready", onDeviceReady, false);

