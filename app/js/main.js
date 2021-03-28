$(document).ready(function () {
    $('.first.select_location').select2({
        placeholder: 'Выберите город',
        allowClear: true,
        dropdownCssClass: 'select_location-list',
        minimumResultsForSearch: Infinity,
        theme: 'custom-select'
    });
});
$(document).ready(function () {
    $('.second.select_location').select2({
        placeholder: 'Выберите место получения',
        allowClear: true,
        dropdownCssClass: 'select_location-list',
        minimumResultsForSearch: Infinity,
    });
});
$(document).ready(function () {
    $('.currency_selection-point').select2({
        dropdownCssClass: 'header_select-list',
        minimumResultsForSearch: Infinity,
        theme: "curency_selection",
    });
});
$(document).ready(function () {
    $('.language_selection-point').select2({
        dropdownCssClass: 'header_select-list',
        minimumResultsForSearch: Infinity,
        theme: "language_selection",
    });
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

let swiperOffers = new Swiper('.offers_main-slider', {
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


// document.querySelector('.main_info-about').addEventListener('click', show);


// function show() {
//     let modal = document.querySelector('.show_more');
//     modal.classList.toggle('active');
// }

$(document).ready(function () {
    $('.bottom_header-burger').click(function (event) {
        $('.bottom_header-burger,.bottom_header-list').toggleClass('menu-active');
    });
});

jQuery.datetimepicker.setLocale('ru');

jQuery('#datetimepicker-main-first').datetimepicker({
    i18n: {
        de: {
            months: [
                'Januar', 'Februar', 'März', 'April',
                'Mai', 'Juni', 'Juli', 'August',
                'September', 'Oktober', 'November', 'Dezember',
            ],
            dayOfWeek: [
                "So.", "Mo", "Di", "Mi",
                "Do", "Fr", "Sa.",
            ]
        }
    },
    timepicker: false,
    format: 'd.m.Y',
    minDate: '-1970/01/02',
    maxDate: '+1970/01/02'
});
jQuery('#datetimepicker-main-second').datetimepicker({
    i18n: {
        de: {
            months: [
                'Januar', 'Februar', 'März', 'April',
                'Mai', 'Juni', 'Juli', 'August',
                'September', 'Oktober', 'November', 'Dezember',
            ],
            dayOfWeek: [
                "So.", "Mo", "Di", "Mi",
                "Do", "Fr", "Sa.",
            ]
        }
    },
    timepicker: false,
    format: 'd.m.Y',
    minDate: '-1970/01/02',
    maxDate: '+1970/01/02'
});
jQuery('#datetimepicker-time-first').datetimepicker({
    datepicker: false,
    format: 'H:i'
});
jQuery('#datetimepicker-time-second').datetimepicker({
    datepicker: false,
    format: 'H:i'
});














































