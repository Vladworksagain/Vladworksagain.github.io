$(".select_location.first").select2({
    placeholder: "Выберите город",
    allowClear: true
});
$(".select_location.second").select2({
    placeholder: "Выберите место получения",
    allowClear: true
});

$(document).ready(function() {
    $('.currency_selection-point').select2({
        selectionCssClass: '.header_left-point'
    })
});

const buttons = document.querySelectorAll('.modal_btn')

const modals = document.querySelectorAll('.popup')

const closeButtons = document.querySelectorAll('.popup_close-btn')


closeButtons.forEach(buttonClose => {
    buttonClose.addEventListener('click', closeModal, false)
})

buttons.forEach(button => {
    button.addEventListener('click', openModal, false)
})

function openModal(event) {
    modals.forEach(item => {
        if (event.target.dataset.button === item.dataset.modal) {
            item.classList.add('open')
        }
    })
}

function closeModal(event) {
    this.closest('.popup').classList.remove('open')
}










































