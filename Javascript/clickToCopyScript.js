function copyText(htmlElement){
	if (!htmlElement){ //if element is false (doesn't exist), return
		return;
	}
	
	let elementText = htmlElement.innerText;
	
	
	let inputElement = document.createElement('textarea'); //creates element
	inputElement.textContent = elementText; //changes text inside element to the text we want to copy
	document.body.appendChild(inputElement); //adds child to document
	inputElement.select();
	document.execCommand('copy'); //copies child
	inputElement.parentNode.removeChild(inputElement); //removes copied text once done
}

document.querySelector('#clickToCopyEmail').onclick = //Copies Email
function (){
	copyText(document.querySelector('#clickToCopyEmail'));
	alert("Email Copied");
}

document.querySelector('#clickToCopyEmailIcon').onclick = //Copies Email from Icon
function (){
	copyText(document.querySelector('#clickToCopyEmail'));
	alert("Email Copied");
}

document.querySelector('#clickToCopyPhone').onclick = //Copies Phone Number
function (){
	copyText(document.querySelector('#clickToCopyActualPhone'));
	alert("Phone Number Copied");
}