// Jeremy "Jay" Sweet
// Advance Visual Frameworks 1312
// Project 2 6 Dec 13
$('#pageInstagram').on('pageinit', function(){
	$(function() {
		var tag = "Food";
		var myid = "872dc4b5f50f42e1af5505f454e12af2";
		var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=" + myid + "&amp;min_id=10";
		$.getJSON(url, instagramData);
	});
	
	var instagramData = function(pictureInfo) {
		console.log(pictureInfo);	
	
		$("#data-message").html("Instagram results:");
		
		$.each(pictureInfo.data, function (index, photo) {
		var pictureStuff = "<li><img src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><p>" + photo.user.full_name + ", <em>" + photo.user.username + "</em></p></li>";
		$("#instagramResults").append(pictureStuff);
		});
	};
});

$('#pageFood2Fork').on('pageinit', function(){

	$(function() {
		var tag = "banana";
		var myid = "675668d6b35b46c525aa967347be024c";
		var url = "http://food2fork.com/api/search?key=" + myid + "&q=" + tag + "&count=1";
		console.log(url);
// "http://food2fork.com/api/search?key=675668d6b35b46c525aa967347be024c&q=banana&count=1"

		$.getJSON(url, food2ForkData);
	});
		$("#data-message").html("Food2Fork results:");
	
	var food2ForkData = function(recipesInfo) {
		alert("test");
		console.log(recipesInfo);	
	
		
		$.each(recipesInfo.data, function (index, recipes) {
		var recipesStuff = "<li>" + recipes.title + "</li>"
		$("#food2ForkResults").append(recipesStuff);
		});
	};
});
