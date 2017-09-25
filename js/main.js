/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


$(document).ready(function() {
    console.log('THIS PORTFOLIO IS OUTDATED, FOR MY LATEST WORK CHECK MY GITHUB: https://github.com/olli208')
    //containerexp animatie
    $('.containerexp').mouseenter(function() {
        $(this).animate({"margin-top":"-0.4em"}, 100);
        //$(this).find('.cont').animate({"margin-top":"-0.1em"}, 100);
        $(this).find('.glyphicon').animate({"margin-top":"-0.02em"}, 100);
        $(this).css('background' , '#fff');
        $(this).find('h3').css('color' , '#eb5070');
        $(this).find('p').css('color' , '#656565');
        $(this).find('p').css('display' , 'block');
        $(this).find('.glyphicon').css('color' , '#fff');
        
        
        //$(this).mouseleave(function() {
        //    $(this).animate({"margin-top":"2.5em"}, 100)});
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


