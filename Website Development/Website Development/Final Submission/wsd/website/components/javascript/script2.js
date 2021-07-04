
/*JAVASCRIPT ON LOGIN PAGE TO TOGGLE BETWEEN LOGIN AND REGISTER*/

var x = document.getElementById("login");
var y = document.getElementById("register");
var z= document.getElementById("btncolor");
        
function register(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
}

function login(){
	x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";
}