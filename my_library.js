$(document).ready(function(){
	$(document).click(function(){
		$('#1').hide();
		$('#1').fadeIn(5000);



		 $('.2').animate({
		width:"80%",
		 marginRight:"500px"
		 },2000);



		 $(".2").show();
		 $(".2").hide(3000);

		// $(".3").slideDown(4000);


		 $(".3").animate({
		 	marginTop:"5000px"
		},10000)

		// }

	});
});

