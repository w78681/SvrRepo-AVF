// Jeremy "Jay" Sweet
// Advance Visual Frameworks 1312
// Project 2 6 Dec 13
$('#pageInstagram').on('pageinit', function(){
	$(function() {
		var tag = "kittens";
		var myid = "872dc4b5f50f42e1af5505f454e12af2";
		var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=" + myid + "&amp;min_id=10";
		$.getJSON(url, screenOutput);
	});
	
	var screenOutput = function(info) {
		console.log(info);	
	
		$("#data-msg").html("Instagram results:");
		
		//<img src='{url}' alt='{caption}' /><p>{fullname}, <em>{username}</em></p>
		
		$.each(info.data, function (index, photo) {
			var pic = "<img src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><p>" + photo.user.full_name + ", <em>" + photo.user.username + "</em></p>";
			$("#data-output").append(pic);
		$("#instagramResults").append(pic);
		});
	};
});

$('#pageFood2Fork').on('pageinit', function(){
	$(function() {
		var tag = "Banana";
		var myid = "675668d6b35b46c525aa967347be024c";
		var url = "https://api.instagram.com/v1/tags/" + tag + "&q=" + tag;
		$.getJSON(url, screenOutput);
	});
	
	var screenOutput = function(info) {
		console.log(info);	
	
		//$("#data-msg").html("Food Results");
		
		//<img src='{url}' alt='{caption}' /><p>{fullname}, <em>{username}</em></p>
		
		//$.each(info.data, function (index, photo) {
		//	var pic = "<img src='" + photo.images.standard_resolution.url + "' alt='" + photo.user.id + "' /><p>" + photo.user.full_name + ", <em>" + photo.user.username + "</em></p>";
		//	$("#data-output").append(pic);
		//$("#instagramResults").append(pic);
		//});
	};
});
