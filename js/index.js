$(document).ready(function () {
    $(window).scrollTop() > 20 ? $('.menu').addClass('scrolled') : $('.menu').removeClass('scrolled')

    $('.content-clickable').on('click', function () {
        let active = $(this).hasClass('active');
        console.log(active)

        $('.content-clickable').removeClass('active');
        active ? $(this).removeClass('active') : $(this).addClass('active');
    })

    $('.menu-toggler, .menu__overlay, .menu__toggler-mobile').on('click', function (e) {
        e.stopPropagation()
        ToggleMenu()
    })

    function ToggleMenu() {
        $(document.body).toggleClass('overflow-hidden');
        $('.menu__list').toggleClass('open');
        $('.menu__overlay').toggleClass('show')
    }

    $(".header__carousel").owlCarousel({
        items: 1,
        center: true,
        loop: true,
        dots: false,
        nav: true,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 3000,
    });

    $( window ).scroll(function(e) {
        $(window).scrollTop() > 40 ? $('.menu').addClass('scrolled') : $('.menu').removeClass('scrolled')
    });
})
