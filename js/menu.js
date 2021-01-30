 $(document).ready(function(){
      
	        show(index);
	        
     });
 var index=1;
 var myVar = setInterval(showrepeat, 5000);
function specificslide(n) {
	        	clearInterval(myVar);
	        	index+=n;
	        	 show(index);
	        	 myVar = setInterval(showrepeat, 5000);
	        }
       function show(n)
         {
         	var i;
			var slides=document.getElementsByClassName('slides');
			var dots = document.getElementsByClassName('indicator');
			if (n > slides.length)
			{
			index = 1;
			}    
  			else if (n < 1)
  		   	 {
  				index = slides.length;
  			 }
  			 else{
  			 	index=n;
  			 }
  			  for (i = 0; i < dots.length; i++) {
      		dots[i].className = dots[i].className.replace(" active", "");
  			}
  			for(i=0;i<slides.length;i++)
  			 {
  			 slides[i].style.display = "none";
  			 }
  			 slides[index-1].style.display = "block";
  			 dots[index-1].className += " active";
		
         }
         function showrepeat()
         {
         	show(index);
         	index+=1;

         }
$(document).ready(function()
{
  $("#RESERVATION").click(function()
  {
    $("form").show();
  });
    $("#RESERVE").click(function()
  {
    $("form").hide();
    alert("Your Table Has Been Reserved For You")
  });$(".price").click(function()
  {
    prompt("Please Enter Your Number To Confirm The Order : ");
    alert("Your Order Will Arrive in 20 Minutes : ")
  });
});
