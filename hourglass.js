function hourglass()	
{	
  var a;	
  a = document.getElementById("div1");	
  setTimeout(function ()	
  {	
    a.innerHTML = "&#xf251;";	
  }, 0000);	
  setTimeout(function ()	
  {	
    a.innerHTML = "&#xf252;";	
  }, 1000);	
    setTimeout(function ()	
  {	
    a.innerHTML = "&#xf253;";	
  }, 2000);	
  setTimeout(function ()	
  {	
    a.innerHTML = "&#xf253;";	
  }, 3000);	
 
}	
hourglass();	
setInterval(hourglass, 4000);
