function showRegisterModal() {
	let modal = document.querySelector('#modal');
	let register = document.querySelector('#register-modal');

	modal.style.display = 'flex';
	register.style.display = 'block';
}

function hideRegisterModal() {
	let modal = document.querySelector('#modal');
	let register = document.querySelector('#register-modal');

	modal.style.display = 'none';
	register.style.display = 'none';
}

let registerBtn = document.querySelector('#register');
registerBtn.addEventListener('click', () => showRegisterModal());

let backBtn = document.querySelector('#back-btn');
backBtn.addEventListener('click', () => hideRegisterModal());
