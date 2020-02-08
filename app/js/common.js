$('.reviews-slider').slick({
    dots: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                appendArrows: '.reviews-nav',
                dots: false
            }
        }
    ]
});

$('.btn-rate').click(function (e) {
    e.preventDefault();
    $('.btn-rate').removeClass('btn-active');
    $(this).addClass('btn-active');
    $('.rate-content').removeClass('active');
    var selectTab = $(this).attr("href");
    $(selectTab).addClass('active');
});


// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal__close, .overlay, .btn-yes');
    var modal = $('.modal__div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end

$(".go_to").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

    //анимируем переход на расстояние - top за 500 мс
    $('body,html').animate({scrollTop: top - 140}, 500);
});

$('.btn-burger').click(function () {
    $('.overlay').fadeIn();
    $('.mobile-menu').fadeIn();
});

$('.btn-close').click(function () {
    $('.overlay').fadeOut();
    $('.mobile-menu').fadeOut();
});

$('.btn-area').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('open').siblings('.connected').slideToggle();
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 670) {
        $('.opportunities-content:not(.slick-initialized)').slick({
            dots: false,
            infinite: true,
            // speed: 100,
            slidesToShow: 2,
            arrows: true,
            appendArrows: '.opportunities-nav',
            variableWidth: true
        });
    } else {
        $(".opportunities-content.slick-initialized").slick("unslick");
    }
});
// slick active

