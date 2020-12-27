@@include('./libs.js');

(function ($) {

    $('.date__item').each(function () {
        $(this).on('click', (e) => {
          if(!e.target.classList.contains('date__dropdown')) {
            const current = $(e.currentTarget)
            const newText = $(e.target).text()

            current.find('.date__current').text(newText)
          }
        })
    })

    $('.gallery__preview-content-show').hide()

    $('.gallery__preview-content-show').click(() => {
      $('.gallery__preview-content').addClass('gallery__preview-content--show')
    })

    $('.js-gallery__preview-content-btn-close').click(() => {
      $('.gallery__preview-content').removeClass('gallery__preview-content--show')
    })

    const data = {
        imgs: [
            {src: './assets/images/progress-img.jpg'},
            {src: './assets/images/progress-img.jpg'},
            {src: './assets/images/progress-img.jpg'},
            {src: './assets/images/progress-img.jpg'}
        ]
    }
    $('.header').addClass('header--dark')
    const img = $('.header .logo img')
    img.attr('src', './assets/images/logo-dark.svg')

    $('.slider__wrap').slick({
        slidesToShow: 4.2,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        zIndex: 5,
        responsive: [
            {
              breakpoint: 1370,
              settings: {
                slidesToShow: 3.4,
              }
            },
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2.8,
                }
              },
              {
                breakpoint: 770,
                settings: {
                  slidesToShow: 2.5,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1.1,
                  variableWidth: true
                }
              },
          ]
    })

    $('.slider-control-left').click(() => {
        $('.slider__wrap').slick('slickPrev')
    })

    $('.slider-control-right').click(() => {
        $('.slider__wrap').slick('slickNext')
    })

    // adaptive

    window.addEventListener('resize', () => {
      if(document.documentElement.clientWidth <= 770) {
        $('.header img').attr('src', './assets/images/logo-dark.svg')
      }
    })

    if(document.documentElement.clientWidth <= 770) {
      $('.header img').attr('src', './assets/images/logo-dark.svg')
    }
})(jQuery);