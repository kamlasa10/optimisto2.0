const items = Array.from(document.querySelectorAll('[data-plan-item]'))
let prevValue = ''
let flag = true

items.forEach(item => {
    item.addEventListener('click', (e) => {
        const value = e.target.dataset.planItem
        $('[data-plan]').removeClass('active')
        $('[data-plan="run"]').css('opacity', 0)

        if(value === 'run') {
            $('[data-plan="run"]').css('opacity', 1)
        }else {
            $(`[data-plan=${value}]`).addClass('active')
        }

        items.forEach(item => item.classList.remove('genplan__item--active'))

        const item = items.find(item => item.dataset.planItem === value)

        item.classList.add('genplan__item--active')
    })
})

$('.genplan').on('mouseover', (e) => {

    if(e.target.tagName.toLowerCase() === 'image') {
        $('[data-plan]').removeClass('active')
        $('[data-plan="run"]').css('opacity', 0)
        items.forEach(item => item.classList.remove('genplan__item--active'))
    }

    if(e.target.dataset.plan) {
        const value = e.target.dataset.plan

            if(value === 'run') {
                $('[data-plan="run"]').addClass('active')
                $('[data-plan="run"]').css('opacity', 1)
            } else {
                $(`[data-plan=${value}]`).addClass('active')
            }

            items.forEach(item => item.classList.remove('genplan__item--active'))

            const item = items.find(item => item.dataset.planItem === value)

            item.classList.add('genplan__item--active')
            flag = true

            prevValue = value  
    } else {
        const item = items.find(item => item.dataset.planItem === value)
        $('[data-plan="run]').css('opacity', 0)
        item.classList.remove('genplan__item--active')
    }
})

// adaptive

if(document.documentElement.clientWidth <= 770) {
    const elem = $('<li class="genplan__item genplan__item--circle"></li>')
    elem.append($('.genplan__link'))
    $('.genplan__list').append(elem)
}

if(document.documentElement.clientWidth <= 480) {
    $('.genplan__right').append($('.genplan__link'))
}