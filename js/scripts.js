$(document).ready(function() {
     // модалка
    //  $('.button-up').fancybox();
    //  Видео
    $(".video-wrapper-video .play-button").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1" allowfullscreen></iframe>')
    });
/*Конец документа*/
});