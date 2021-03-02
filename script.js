$(document).ready(function () {
	$('body').keydown(function() {
		$(this).css("background-color", "black");
		$("#page-title").css("color", "white");
	})
	$('body').keyup(function () {
		$(this).css("background-color", "white");
		$("#page-title").css("color", "black");
	})

	
	
	$("#bbtn").click(function() {
			alert("As Alan Walker says....");
		$("#page-title").fadeOut("slow", "linear", function () {
			$("#page-title").fadeIn("slow", "linear",function alert2() {
				alert("...Faded");
			});
		});

	})
})