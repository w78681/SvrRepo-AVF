// Jeremy "Jay" Sweet
// Advance Visual Frameworks 1312
// Project 2 6 Dec 13
$(function() {
	var instaTag = "Food";
	var instaId = "872dc4b5f50f42e1af5505f454e12af2";
	var instaUrl = "https://api.instagram.com/v1/tags/" + instaTag + "/media/recent?callback=?&amp;client_id=" + instaId + "&amp;min_id=10";
	$.getJSON(instaUrl, instagramData);
});

var instagramData = function(pictureInfo) {
	console.log(pictureInfo);	

	$("#data-message").html("Instagram results:");
	
	$.each(pictureInfo.data, function (index, photo) {
	var pictureStuff = "<li><img src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><p>" + photo.user.full_name + ", <em>" + photo.user.username + "</em></p></li>";
	$("#instagramResults").append(pictureStuff);
	});
};

$(function() {
	var foodTag = "Banana";
	var foodId = "675668d6b35b46c525aa967347be024c";
	var foodUrl = "http://food2fork.com/api/search?key=" + foodId + "&q=" + foodTag + "&count=2";
	$.getJSON(foodUrl, foodData);
	console.log(foodData);
});

var foodData = function(foodInfo) {
	console.log(foodInfo);	

	$("#data-message").html("Recipe results:");
	
	$.each(pictureInfo.data, function (index, photo) {
	var pictureStuff = "<li><img src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><p>" + photo.user.full_name + ", <em>" + photo.user.username + "</em></p></li>";
	$("#food2ForkResults").append(pictureStuff);
	});
};
