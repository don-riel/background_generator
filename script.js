var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function showTextValue() {
	h3.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")";

	button.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")";

	showTextValue();
	
}

function setRandomGradient() {
	var randomColor1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	var randomColor2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	body.style.background = "linear-gradient(to right, " 
	+ randomColor1 + ", " + randomColor2 + ")";

	button.style.background = "linear-gradient(to right, " 
	+ randomColor1 + ", " + randomColor2 + ")";

	color1.value = randomColor1;
	color2.value = randomColor2;

	showTextValue();
}

setRandomGradient();

button.addEventListener("click", setRandomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);



