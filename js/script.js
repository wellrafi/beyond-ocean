$(document).ready(function() {
    $('.toggle-hamburger').on('click', function () {
        $(this).toggleClass('active')
        $('.mobile-menu').toggleClass('active')
    })
})