/**
 * Show modal by id
 * @param {*} modalId modal id
 */
function showModal(modalId) {
	let selectedModal = document.querySelector(`#${modalId}`);

	selectedModal.style.display = 'flex';
}

/**
 * Hide modal by id
 * @param {String} modalId modal id
 */
function hideModal(modalId) {
	let selectedModal = document.querySelector(`#${modalId}`);

	selectedModal.style.display = 'none';
}
