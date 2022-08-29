function showModal() {
	let modal = document.querySelector('#modal');
	modal.style.display = 'flex';
}

function hideModal() {
	let modal = document.querySelector('#modal');
	modal.style.display = 'none';
}

let modal = document.querySelector('#register');
modal.addEventListener('click', () => showModal());

let backBtn = document.querySelector('#back-btn');
backBtn.addEventListener('click', () => hideModal());
