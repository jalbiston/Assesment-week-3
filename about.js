console.log("hello world");

function handleSubmit(event) {
  evt.preventDefault();
  alert("Succesfully Submitted!");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);



function ducky(event){
	evt.preventDefault();
	alert("You are one cool dude")
}

// let duckComp = document.querySelector("#duck")

document.querySelector("#duck").addEventListener("mouseover", ducky)


