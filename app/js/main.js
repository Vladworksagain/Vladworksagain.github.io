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
    infinite: false,
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

$( ".main_info-about" ).click(function() {
    $( this ).toggleClass( "rotate" );
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

    // validate
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

    // validate
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

$(document).ready(function(){
    $(".open_more").click(function(){
      $(this).next('div').toggle();      
    });
  });

  $( ".open_more" ).click(function() {
    $( this ).toggleClass( "plus" );
  })

// show more info //















































