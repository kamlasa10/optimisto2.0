(function($) {
    $('.technical__item').removeClass('technical__item--active')
    $('.technical__content-item').hide()
    const current = $('.technical__tabs-current')
    let isOpen = false
    let prevActiveTab = null

    $('.technical__item').each(function(i) {
        $(this).on('click', () => {
            showTab(i)
        })
    })

    function showTab(i) {
        $('.technical__item').each(function() {
            $(this).removeClass('technical__item--active')
        })

        $('.technical__content-item').hide()

        $('.technical__content-item').eq(i).show()

        if(document.documentElement.clientWidth >= 800) {
            $('.technical__item').eq(i).addClass('technical__item--active')
        }

        if(document.documentElement.clientWidth <= 770) {
            const activeTab = $('.technical__item').eq(i)
            const imgSource = activeTab.find('.technical__item-img > img:first-child').attr('src')
            const activeImgSource = activeTab.find('.technical__item-svg').attr('src')
            const text = activeTab.find('.technical__item-title').text()

            if(prevActiveTab) {
                prevActiveTab.show()
            }

            activeTab.hide()
            
            current.find('.technical__item-img > img:first-child').attr('src', imgSource)
            current.find('.technical__item-svg').attr('src', activeImgSource)
            current.find('.technical__item-title').text(text)

            current.addClass('technical__item--active')

            prevActiveTab = activeTab
        }
    }

    current[0].addEventListener('click', (e) => {
        e.stopPropagation()
        $('.technical__tabs').fadeToggle()

        isOpen = !isOpen ? true: false

        if(isOpen) {
            $('.technical__triangle').addClass('technical__triangle--active')
        } else {
            $('.technical__triangle').removeClass('technical__triangle--active')
        }
    })

    if(document.documentElement.clientWidth <= 770) {
        document.addEventListener('click', (e) => {
            if(isOpen && e.target !== $('.technical__item')[0] || isOpen && !e.target.closest('.technical__item') || isOpen && e.target.closest('.technical__tabs-current') === null) {
                isOpen = false
                $('.technical__tabs').fadeOut()
            }

            if(isOpen) {
                $('.technical__triangle').addClass('technical__triangle--active')
            } else {
                $('.technical__triangle').removeClass('technical__triangle--active')
            }
        })
    }

    showTab(0)
})(jQuery)