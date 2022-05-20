console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert(`You're form has been successfully submitted.`)
	// console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function complimenting(evt) {
	alert(`You're number 1! - Nacho`)
}

let compliment = document.querySelector('img')
compliment.addEventListener('mouseover', complimenting)