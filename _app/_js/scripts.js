$(document).ready(function() {
    /* Якорь */
    $("a[href='#prices']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });
    // модалка
    $('.more-button').magnificPopup({
        type: 'inline',
        midClick: true,
        mainClass: 'mfp-fade'
    });
/*Конец документа*/
});