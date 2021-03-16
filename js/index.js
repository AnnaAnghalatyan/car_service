$('.content-clickable').on('click', function () {
    $(this).toggleClass('active');
    // let active_blocks = $('.content-clickable.active');
    // active_blocks.removeClass('active');

})

$('.menu__sub-toggler').on('click', function () {
    $(this).closest('.menu__item').toggleClass('open')
})