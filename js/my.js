$(document).ready(function() {
    // Слайдеры
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        dots: false,
        adaptiveHeight: false,
        prevArrow: '<button class="prev-btn"></button>',
        nextArrow: '<button class="next-btn"></button>',
        infinite: true,
        focusOnSelect: true,
        cssEase: 'linear',
        asNavFor: '.thumb-slider',
        responsive: [{
                breakpoint: 992,
                settings: {
                    dots: true,
                    fade: true,
                    dotsClass: 'my-dots'
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    dots: true,
                    dotsClass: 'my-dots'
                }
            }
        ]
    });

    $('.thumb-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: false,
        asNavFor: '.main-slider',
        focusOnSelect: true,
        centerMode: false,
        vertical: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            }
        }]
    });

    $('.breadcrumb__slider').slick({
        dots: false,
        infinite: false,
        centerMode: false,
        arrows: false,
        slidesToShow: 1,
        variableWidth: true,
        cssEase: 'linear'
    });
    $('.similar-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        dots: false,
        infinite: true,
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
    $('.schemes-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    variableHight: true,
                }
            },
        ]
    });
    $('[data-fancybox="gallery"]').fancybox({});

    // при нажатии на кнопку scrollup
    $('.scrollup').click(function() {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    //Инициируем карусель фото в анонсе товаров
    $(".prev-photo-item").brazzersCarousel();

    // Скрываем кнопку "оставить отзыв" и показываем ее
    $('#ostotz').on('show.bs.collapse', function() {

        $('#musthideR').hide();
    });
    $('#ostotz').on('hidden.bs.collapse', function() {

        $('#musthideR').show();
    });
    $('#askUs').on('show.bs.collapse', function() {

        $('#musthideQ').hide();
    });
    $('#askUs').on('hidden.bs.collapse', function() {

        $('#musthideQ').show();
    });

});

$("[data-toggle=popover]").popover({
    html: true,
    trigger: 'hover',
    placement: 'top'
});
// Оформление заказа, скрытые поля
$("input[name='radioDelivery']").change(function() {
    if ($("input[value='Msk_val']").prop("checked")) {
        $('.msk-group').css("display", "block");
        $('.podmsk-group').css("display", "none");
    } else if ($("input[value='Pod_Msk_val']").prop("checked")) {
        $('.msk-group').css("display", "none");
        $('.podmsk-group').css("display", "block");
    } else {
        $('.msk-group').css("display", "none");
        $('.podmsk-group').css("display", "none");
    }
});
// при прокрутке окна (window)
$(window).scroll(function() {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop() > 200) {
        // то сделать кнопку scrollup видимой
        $('.scrollup').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
        $('.scrollup').fadeOut();
    }
});


$(".filter-sel").change(function() {
    if ($(this).val() == 0) return false;

    var id_select = $(this).attr('id');
    $(this).children("option").filter(":selected").each(function() {
        var x = $(this);
        var b = x.text();
        // alert(b);
        // alert(id_select);
        $('#' + id_select).siblings(".delselect").removeClass("d-none");
        $('#' + id_select).siblings('.delselect').html(b);

        $('#' + id_select).addClass('d-none');
        $('.filter-btn').addClass('filter-btn-marked');
        $('#clearFilter').addClass('active');
    });
});

$('.delselect').click(function() {
    var id_close = $(this).siblings(".filter-sel").attr('id');
    $('#' + id_close).removeClass("d-none");
    $('#' + id_close).siblings('.delselect').empty();
    $(this).addClass('d-none');
    $('#' + id_close).val('0');
    if ($('.filter-sel').is('.d-none')) return false;
    $('#clearFilter').removeClass('active');
    $('.filter-btn').removeClass('filter-btn-marked');

});
$('#clearFilter').click(function() {
    if (!this.classList.contains('active')) return false;
    $(".filter-sel").val('0');
    $('.filter-btn').removeClass('filter-btn-marked');
    $(".filter-sel").removeClass('d-none');

    $('.delselect').empty();
    $('.delselect').addClass('d-none');
    $('#clearFilter').removeClass('active');
});
// Кнопка калькулятора скрывается при нажатии на крестик
$('#calc_cls').click(function() {
    $('.calc-btn-bx').addClass('d-none');
});
$(window).on('load', function() {
    $('#your_town').modal('show');
});

$('.yesTown').click(function() {
    $('#your_town').modal('hide');
});
$('.noTown').click(function() {
    $('#your_town').modal('hide');
     $('#city_modal').modal('show');
});