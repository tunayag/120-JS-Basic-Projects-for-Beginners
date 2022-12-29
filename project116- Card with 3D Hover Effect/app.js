$('body').mousemove(function (p) {
    let rotateX = -($(window).innerWidth() / 2 - p.pageX) / 20;
    let rotateY = -($(window).innerHeight() / 2 - p.pageY) / 10;
    $('.container').css("transform", "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
});
$(document).mouseout(function () {
    $('.container').css("transform", "");
});