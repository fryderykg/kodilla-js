$(document).ready(function() {
    var carouselList = $('#carousel').find('ul');

    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }

    function changeSlide() {
        carouselList.animate({'marginLeft': -600}, 500, moveFirstSlide);
    }

    setInterval(changeSlide, 3000);
});