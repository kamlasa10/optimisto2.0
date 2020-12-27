@@include('./libs.js');

(function ($) {
    // adaptive

    if(document.documentElement.clientWidth <= 770) {
        $('.company').append($('.more__leaflet'))
    }

    if(document.documentElement.clientWidth <= 480) {
        const decor = $('.company__left-decor')
        decor.find('img').attr('src', './assets/images/group-leaflet.png')
        $('.company__right').append(decor)
    }

})(jQuery);