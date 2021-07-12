function showPassword() {
	const pass = document.getElementById('pass');
	if (pass.type === "password" && pass.value !== '') {
		pass.type = "text";
	} else {
		pass.type = "password";
	}
}

function forgetPassword() {
	const form1 = document.getElementById('form-1');
	form1.style.display = 'none';
	const form2 = document.getElementById('form-2');
	form2.style.display = 'block';
}

function validateUser() {
	const userPassword = '123456789';
	const userName = 'tdgadmin';
	let userInputPassword = document.getElementById('pass');
	let userInput = document.getElementById('user');
	console.log(userInput.value);
	if (userInput.value !== userName) {
		userInput.style.border = '1px solid #FD0A50';
		const message = document.createElement('p');
		const form = document.getElementById('form');
		const text = document.createTextNode('მომხმარებლის სახელი არასწორია');
		userInput.placeholder = '';
		userInput.value = '';
		message.appendChild(text);
		message.className = 'error-message';
		form.insertBefore(message, form.children[1]);
		userInputPassword.value = '';
		userInput.style.marginBottom = '0';
	} else if (userInputPassword.value !== userPassword) {
		userInputPassword.parentElement.style.border = '1px solid #FD0A50';
		document.getElementById('eye').className = 'filter-pink';
		const message = document.createElement('p');
		const form = document.getElementById('form');
		const text = document.createTextNode('თქვენ მიერ შეყვანილი პაროლი არასწორია');
		userInputPassword.placeholder = '';
		userInputPassword.value = '';
		message.appendChild(text);
		message.className = 'error-message';
		form.insertBefore(message, form.children[2]);
		document.getElementById('input-style-div').style.marginBottom = '0';
	} else if (userInput !== '' && userInputPassword.value === userPassword) {
		userInputPassword.parentElement.style.border = '1px solid #5FB2FF';
		alert('ავტორიზაცია წარმატებით დასრულდა');
	}
	document.getElementById('submit').disabled = true;
}

function sendMessage() {
	const passReset = document.getElementById('pass-reset');
	if (passReset.value !== '') {
		document.getElementById('pass-reset').style.display = 'none';
		document.getElementById('input-radio').style.display = 'flex';
		const send = document.getElementById('button-send');
		send.textContent = 'გაგზავნა';
		send.addEventListener("click", smsCode);
	}
}

function smsCode() {
	document.getElementById('input-radio').style.display = 'none';
	const passReset = document.getElementById('pass-reset');
	passReset.style.display = 'block';
	passReset.value = '';
	passReset.placeholder = 'SMS კოდი';
	const send = document.getElementById('button-send');
	send.textContent = 'შესვლა';
	const img = document.getElementById('ellipse');
	const form = document.getElementById('form-3');
	form.insertBefore(img, form.children[2]);
	img.style.position = 'absolute';
	img.style.right = '-30px';
	img.style.top = '10%';
	document.getElementById('tooltiptext').textContent = 'პაროლი ვალიდურია სისტემიდან გამოსვლამდე, გთხოვთ შეცვალოთ პაროლი';
	img.style.aligSelf = 'center';
	form.style.position = 'relative';
}