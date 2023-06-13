var burgerIcon = document.getElementById("burger");
var navigation = document.getElementById("nav");

burgerIcon.addEventListener("click", function(){
	burgerIcon.classList.toggle("active")
	navigation.classList.toggle("active")
});
