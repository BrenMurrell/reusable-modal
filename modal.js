var modal = document.querySelector('.modal');
var modalTitle = document.querySelector('.modal__title');
var modalCopy = document.querySelector('.modal__copy');
var modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', function() {
    closeModal();
})

function openModal(title, copy, canClose = false ) {
    modalTitle.innerHTML = title;
    modalCopy.innerHTML = copy;
    modal.classList.add('modal--open');
    if (canClose) {
        modal.classList.add('modal--canclose');
    } else {
        modal.classList.remove('modal--canclose');
    }
}

function closeModal() {
    modalTitle.innerHTML = "";
    modalCopy.innerHTML = "";
    modal.classList.remove('modal--open');

}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key == "Escape" || evt.key == "Esc");
    } else {
        isEscape = (evt.keyCode == 27);
    }
    if (isEscape) {
        closeModal();
    }
};