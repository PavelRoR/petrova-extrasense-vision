$(document).ready(function() {
      /* Якорь */
  $("a[href='#prices']").click(function (h) {
    h.preventDefault();
    var f = $(this).attr("href"),
        g = $(f).offset().top;
    $("body,html").animate({
        scrollTop: g
    }, 1500)
});/* Таймер */
var clock;
var futureDate = new Date("March 02, 2023 00:00 UTC+3");
var currentDate = new Date();
var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

if (diff < 0) {
  diff = 0;
  $('#link-1').attr('href', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1599&clean=true&lg=ru').text('Оплатить');
  $('#link-2').attr('href', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1603&clean=true&lg=ru').text('Оплатить');
  $('.cost-sale, .timer,.prepayment').remove();
  $('.cost-full span').addClass('unbroken');
}

clock = $('.clock').FlipClock(diff, {
  clockFace: 'HourlyCounter',
  countdown: true,
  language: 'ru',
  callbacks: {
      stop: function () {
        $('#link-1').attr('href', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1599&clean=true&lg=ru').text('Оплатить');
        $('#link-2').attr('href', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1603&clean=true&lg=ru').text('Оплатить');
        $('.cost-sale, .timer,.prepayment').remove();
  $('.cost-full span').addClass('unbroken');
      }
  },
});
    // Модалка
    $('.button-up').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'mfp-fade'
    });
    //  Видео
    $(".video-wrapper-video .play-button").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1" allowfullscreen></iframe>')
    });
     // слайдер с видео-отзывами
     $('.revs-slider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 300,
        arrows: true,
        centerPadding: '10px',
        // adaptiveHeight: true,
        centerMode: true,
        // appendArrows: '.video-revs-arrows-1',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                centerMode: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerMode: true
            }
        }
    ]
    });
    // слайдер с текстовыми отзывами
    $('.revs-slider-text').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 300,
        arrows: true,
        centerPadding: '10px',
        adaptiveHeight: true,
        centerMode: true,
        // appendArrows: '.video-revs-arrows-2',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.text-rev-link-modal').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });
    $('.slick-dots').wrap('<div class="container container-revs">')
    // $(".video-wrapper-video .play-button").click(function () {
    //     var a = $(this).parent().attr("data-youtube");
    //     $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1" allowfullscreen></iframe>')
    // });
    function imToVideo() {
        $('.video-wrapper-revs iframe').each(function () {
            var l = $(this).parent().attr('data-img');
            $(this).parent().html('<img src="' + l + '" alt="Видео отзыв">');
        });
        $(".video-wrapper-revs img, .play-button-rev").click(function () {
            var a = $(this).parent().attr("data-youtube");
            $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1" allowfullscreen></iframe>')
        });
    }
    $('.revs-slider').on('swipe', function (event, slick, direction) {
        imToVideo();
    });
    $('.revs-slider').on('afterChange', function (event, slick, direction) {
        imToVideo();
    });
    $('.revs-slider').on('beforeChange', function (event, slick, direction) {
        imToVideo();
    });
    /* Видео */
    $(".video-wrapper-revs img, .play-button-rev").click(imToVideo());
/*Конец документа*/
});