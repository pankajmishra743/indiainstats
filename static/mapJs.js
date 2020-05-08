
function check_value(val) { // You have to pass a parameter
   var e = document.getElementById("selYear");
   var year = e.options[e.selectedIndex].text;
   if(year=="2017"){
     var imgs = ['static/Map Based Outputs/State Wise MMR in 2017.png', 'static/Map Based Outputs/State Wise IMR in 2017.png', 'static/Map Based Outputs/GDP Per Capita in 2017.png'];
   }
   else if(year=="2018"){
     var imgs = ['static/Map Based Outputs/State Wise MMR in 2017.png', 'static/Map Based Outputs/State Wise IMR in 2018.png', 'static/Map Based Outputs/GDP Per Capita in 2018.png'];
   }
   else {
     var imgs = ['static/Map Based Outputs/State Wise MMR in 2019.png', 'static/Map Based Outputs/State Wise IMR in 2019.png', 'static/Map Based Outputs/GDP Per Capita in 2019.png'];
   }
   var img = imgs[val];
   var el = document.getElementById("imgBox");
   if (img) {
	 el.src = img;
	 el.style.display = "";
   }

 }
 
 function yearChanged(){
	 var rad1 = document.getElementById("r1");
	 var rad2 = document.getElementById('r2');
	 var rad3 = document.getElementById('r3');
	 document.getElementById('imgBox').style.display = "none";;
     if(rad1.checked) {rad1.checked = false;}
	 if(rad2.checked) {rad2.checked = false;}
	 if(rad3.checked) {rad3.checked = false;}
	 
 }
