$(".select_location.first").select2({
    placeholder: "Выберите город",
    allowClear: true,
    minimumResultsForSearch: Infinity
});
$(".select_location.second").select2({
    placeholder: "Выберите место получения",
    allowClear: true,
    minimumResultsForSearch: Infinity
});

$(document).ready(function () {
    $('.currency_selection-point').select2({
        minimumResultsForSearch: Infinity,
    })
});

$(document).ready(function () {
    $('.language_selection-point').select2({
        minimumResultsForSearch: Infinity
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

let swiperRental = new Swiper('.car_rental-slider', {
    containerModifierClass: 'car_rental-slider',
    wrapperClass: 'slider_wrapper',
    slideClass: 'slider_items',
    spaceBetween: 10,
    slidesPerView: 3,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiperOffers = new Swiper('.offers_main-slider', {
    containerModifierClass: 'offers_main-slider',
    wrapperClass: 'offers_slider-wrapper',
    slideClass: 'offers_slider-items',
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,    
    },
});

function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }














































