var $ = function (id) {
    return document.getElementById(id); 
}
function f_click() {
	
    var c_temp = parseFloat($("c_temp").value);
   

    $("f_con").value = "";
   

    if (isNaN(c_temp)) {
        alert(c_temp);
    }else {
    	var f_con = (c_temp * (9/5) +32);
    	$("f_con").value = f_con.toFixed(2);
    }
    
}
//$("calculate").onclick=c_click();
//$("f_temp").focus();
function display(t){
	if(f_click <= 32)
window.document.pic.src="http://hottytoddy.com/wp-content/uploads/2015/02/kuwait-cold-weather.jpg";
	else{
		window.document.pic.src="http://pediatricsofflorence.com/wp-content/uploads/2012/05/summer-smile-sun-hi-300x300.png";
	}
}

function c_click(){
	 var f_temp = parseFloat($("f_temp").value);
	
	 $("c_con").value = "";
	 
	 if (isNaN(f_temp)) {
	        alert("Temperature must be a number!");
	 }
	 else{
		 var c_con = (f_temp - 32) * (5/9);
		 $("c_con").value = c_con.toFixed(2);
	 }
	 
}
//$("calculate").onclick=f_click();
//$("c_temp").focus();