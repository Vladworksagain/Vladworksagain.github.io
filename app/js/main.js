
// select2//

$(document).ready(function () {
    $('.first.select_location').select2({
        placeholder: 'Выберите город',
        dropdownCssClass: 'select_location-list',
        minimumResultsForSearch: Infinity,
        theme: 'custom-select'
    });
});
$(document).ready(function () {
    $('.second.select_location').select2({
        placeholder: 'Выберите место получения',
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

// select2//

// modal-popup //

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

// modal-popup //

//section car_rental //

$slick_slider = $('.car_rental-slider');
settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
        {
            breakpoint: 1167,
            settings: {
                arrows: false,
                dots: true,
                slidesToScroll: 2,
            }
        }
    ]
}
$slick_slider.slick(settings);

$(window).on('resize', function () {
    if ($(window).width() < 768) {
        if ($slick_slider.hasClass('slick-initialized')) {
            $slick_slider.slick('unslick');
        }
        return
    }

    if (!$slick_slider.hasClass('slick-initialized')) {
        return $slick_slider.slick(settings);
    }
});

//section car_rental //

// section offers //
$('.offers_main-slider').slick({
    arrows: false,
    dots: true,
    appendDots: '.slider_wrapper',
    dotsClass: 'offers_slider-dots',
    infinite: false,
    speed: 600,
});
// section offers //

// Section about_company -read_more //

let check = document.querySelector('.main_info-about');
if (check) {
    check.addEventListener('click', show, false);
}

function show() {
    let modal = document.querySelector('.show_more');
    modal.classList.toggle('show');
}

$(".main_info-about").click(function () {
    $(this).toggleClass("rotate");
})

// Section about_company -read_more //

// header_burger //

$(document).ready(function () {
    $('.bottom_header-burger').click(function (event) {
        $('.bottom_header-burger,.bottom_header-list').toggleClass('menu-active');
    });
});

// header_burger //

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

document.querySelectorAll('.select_car-item').forEach((element) => {
    element.addEventListener('click', function () {
        this.classList.toggle('active_arrow');
    });
});


//range value section rent//

let $range = $("#price_range");
let $inputFrom = $("#range_input-from");
let $inputTo = $("#range_input-to");
let instance;
let min = 0;
let max = 1000;
let from = 0;
let to = 0;

$range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 0,
    to: 1000,
    prefix: '$',
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
}

$inputFrom.on("change", function () {
    var val = $(this).prop("value");

    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }

    instance.update({
        from: val
    });

    $(this).prop("value", val);

});

$inputTo.on("change", function () {
    var val = $(this).prop("value");

    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        to: val
    });

    $(this).prop("value", val);
});

//range value section rent//

// show more info //

$(document).ready(function () {
    $(".open_more").click(function () {
        $(this).next('div').toggle();
    });
});

$(".open_more").click(function () {
    $(this).toggleClass("plus");
})

// show more info //

// car models //

let condition = document.querySelector('.show_more-car');
if (condition) {
    condition.addEventListener('click', showModels, false);
}

function showModels() {
    let showCar = document.querySelector('.more_models-car');
    showCar.classList.toggle('show_models-car');
}

$(".show_more-car").click(function () {
    $(this).toggleClass("arrow_rotate");
})

// car models //

// section about_company //

let checkCompany = document.querySelector('.company_read-more');
if (checkCompany) {
    checkCompany.addEventListener('click', showMoreInfo, false);
}

function showMoreInfo() {
    let showText = document.querySelectorAll('.about_company-hidden');
    for (let i = 0; i < showText.length; i++) {
        showText[i].classList.toggle('about_company-show');
    }
}

$(".company_read-more").click(function () {
    $(this).toggleClass("company_arrow-rotate");
})

// section about_company //

// mob-filter //

var $range2 = $("#price_range-mob"),
    $inputFrom2 = $("#range_from-mob"),
    $inputTo2 = $("#range_to-mob"),
    instance2,
    min2 = 0,
    max2 = 1000,
    from2 = 0,
    to2 = 0;

$range2.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min2,
    max: max2,
    from: 0,
    to: 1000,
    step: 0.01,
    onStart: updateInputs2,
    onChange: updateInputs2
});
instance2 = $range2.data("ionRangeSlider");

function updateInputs2(data) {
    from2 = data.from;
    to2 = data.to;

    $inputFrom2.prop("value", from2);
    $inputTo2.prop("value", to2);
}

$inputFrom2.on("input", function () {
    var val = $(this).prop("value");

   
    if (val < min2) {
        val = min2;
    } else if (val > to2) {
        val = to2;
    }

    instance2.update({
        from: val
    });
});

$inputTo2.on("input", function () {
    var val = $(this).prop("value");

    
    if (val < from2) {
        val = from2;
    } else if (val > max2) {
        val = max2;
    }

    instance2.update({
        to: val
    });
});

// data-popup-filter //

let filterButton = document.querySelectorAll('.rent_filter-icon');

let filterModal = document.querySelectorAll('.rent_mobile-filter');

let filterClose = document.querySelectorAll('.close_icon-filter');

filterClose.forEach(closeFilter => {
    closeFilter.addEventListener('click', close, false)
})

filterButton.forEach(buttons => {
    buttons.addEventListener('click', open, false)
})

function open(event) {
    filterModal.forEach(item => {
        if (event.target.dataset.open === item.dataset.close) {
            item.classList.add('rent_filter-open')
        }
    })
}

function close(event) {
    this.closest('.rent_mobile-filter').classList.remove('rent_filter-open')
}

// data-popup-filter //


// input validation form //

let selector = document.querySelectorAll('input[type="tel"]');

let im = new Inputmask('+38 (999) 999 99 99', { "clearIncomplete": true });

im.mask(selector);

let validateForms = function (selector, rules, successModal) {
    new window.JustValidate(selector, {
        rules: rules,
        messages: {
            name: {
                required: 'Заполните это поле'
            },
            email: {
                required: 'Заполните это поле',
                email: 'Некорректный адрес электронной почты'
            },
            tel: {
                required: 'Заполните это поле'
            }
        },
        colorWrong: 'red',
        submitHandler: function (form) {
            document.querySelectorAll('.popup_letter').forEach((element) => {
                element.classList.add('popup_letter-show');
            });
            function letterClose() {
                document.querySelectorAll('.popup_letter').forEach((element) => {
                    element.classList.remove('popup_letter-show')
                })
            }
            let closeLetter = document.querySelectorAll('.letter_popup-close');
            for (let i = 0; i < closeLetter.length; i++) {
                closeLetter[i].addEventListener('click', letterClose)
            }
        }
    });
}

validateForms('.form', {
    email: {
        required: true,
        email: true
    },
    tel: {
        required: true
    },
    name: {
        required: true,
    },
})

// input validation form //

// car_card-slider //

$('.slider_car-vertical').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    asNavFor: '.slider_car-horizontal',
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0px",
    responsive: [
        {
            breakpoint: 1125,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 570,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 482,
            settings: {
                slidesToShow: 3
            }
        },      
        {
            breakpoint: 360,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});

$('.slider_car-horizontal').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider_car-vertical',
    vertical: true,
    arrows: false,
    verticalSwiping: false,
    horizontalSwiping: true
});

$('.proposition_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    infinite: true,
    centerPadding: "0px",
    responsive: [
        {
            breakpoint: 581,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }
    ]
});


// car_card-slider //

// cooment section //

$('.recall_visitors-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'recall_dots-slider'
});

// cooment section //


// section plus-minus //

$(document).ready(function () {
    $(".car_short-tittle").click(function () {
        $(this).next('p').toggle();
    });
});

$(".car_short-tittle").click(function () {
    $(this).toggleClass("minus");
})


// section plus-minus //
















































