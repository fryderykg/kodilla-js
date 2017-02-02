$(document).ready(function() {
    var carouselList = $('#carousel').find('ul'),
        slideTimeout;

    //Move first picture on the end
    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }

    // move last picture on the front
    function moveLastSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.css({marginLeft:-600});
    }

    function changeSlideRight() {
        carouselList.animate({'marginLeft': -600}, 500, moveFirstSlide);
        slideTimeout = setTimeout(changeSlideRight, 3000);
    }

    function changeSlideLeft() {
        moveLastSlide();
        carouselList.animate({'marginLeft': 0}, 500);
        slideTimeout = setTimeout(changeSlideLeft, 3000);
    }

    $('#carouselButtonRight').click(function() {
        clearTimeout(slideTimeout);
        changeSlideRight();
    });

    $('#carouselButtonLeft').click(function() {
        clearTimeout(slideTimeout);
        changeSlideLeft();
    });
});