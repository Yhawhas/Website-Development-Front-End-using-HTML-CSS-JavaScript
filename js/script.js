$(document).ready(function() {
	$("#datepicker").datepicker();
	$("#datepicker1").datepicker();



	var slideIndex = 1;
	imageSlider(slideIndex, 'slides1');
	imageSlider(slideIndex, 'slides2');
	imageSlider(slideIndex, 'slides3');
	imageSlider(slideIndex, 'slides4');
	imageSlider(slideIndex, 'slides5');

	window.slide=function (slideNumber, className) {
		imageSlider(slideIndex += slideNumber, className);
	}

	function imageSlider(slideNumber, className) {
		var i;
		var x = document.getElementsByClassName(className);
		if (slideNumber > x.length) {slideIndex = 1}    
			if (slideNumber < 1) {slideIndex = x.length}
				for (i = 0; i < x.length; i++) {
					x[i].style.display = "none";  
				}
				console.log(slideIndex-1);
				x[slideIndex-1].style.display = "block";  
			}
		});