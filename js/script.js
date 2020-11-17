$(document).ready(function() {
    $('.toggle-hamburger').on('click', function () {
        $(this).toggleClass('active')
        $('.mobile-menu').toggleClass('active')
    })

    let currentBanner = 1;
    let bannerCount = 5

    function changeCurrentBanner(current) {
        let cBanner = current ? current : currentBanner
        $('.number-slide').html(cBanner + '/' + bannerCount)
    }
    changeCurrentBanner()
    function getIndexBanner(e) {
        return e.getElementsByClassName('data-image')[0].defaultValue
    }

    $('.owl-carousel-testimoni').owlCarousel({
        items:1,
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
    let owlBanner = $('.owl-carousel-center')
    
    owlBanner.owlCarousel({
        center: true,
        items: 1,
        dots: false,
        navs: false,
        loop:true,
        margin:10,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        responsive:{
            600: {
                items: 1
            },
            1000: {
                items: 2
            },
            1300: {
                items: 3,
            },
            1500: {
                items: 4
            },
            1750: {
                items: 5
            }
        }
    });

    $('#prev-arrow-banner-slider').click(function() {
        currentBanner = currentBanner === 1 ? bannerCount : currentBanner - 1
        changeCurrentBanner(currentBanner)
        owlBanner.trigger('prev.owl.carousel');
    })

    $('#next-arrow-banner-slider').click(function () {
        currentBanner = currentBanner === 5 ? 1 : currentBanner + 1
        changeCurrentBanner(currentBanner)
        owlBanner.trigger('next.owl.carousel');
    })

    $('.owl-item').click(function (e) {
        let n = $(this).index()
        let getIndex = getIndexBanner(this)
        currentBanner = parseFloat(getIndex)
        changeCurrentBanner(getIndex)
        owlBanner.trigger('to.owl.carousel', n);
    })
})
