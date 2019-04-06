var link = document.querySelector(".contacts .btn");
var popup = document.querySelector(".popup-writeus");
var closePopupBtn = document.querySelector(".popup-writeus__close");
var writeusForm = document.querySelector(".writeus-form");
var userName = document.querySelector("[name=username]")
var userEmail = document.querySelector("[name=useremail]")


link.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.add("popup-writeus-show");
	input.focus();
})

closePopupBtn.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.remove("popup-writeus-show");
})

writeusForm.addEventListener("submit", function(event){
	event.preventDefault();
	if (!userName.value || !userEmail.value) {
		event.preventDefault();
		console.log("Неверный логин или пароль");	
	}
})

window.addEventListener("keydown",function(event) {
	if(event.keyCode === 27) {
		popup.classList.remove("popup-writeus-show");
	}
})