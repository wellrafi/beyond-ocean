$(document).ready(function() {
    $('.toggle-hamburger').on('click', function () {
        $(this).toggleClass('active')
        $('.mobile-menu').toggleClass('active')
    })
    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        dots: false,
        loop: true,
        nav: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        navText: ["<img src='/assets/icons/arrow_left.svg'>","<img src='/assets/icons/arrow_right.svg'>"],
        responsive:{
            1000:{
                items:1
            }
        }
    })
})