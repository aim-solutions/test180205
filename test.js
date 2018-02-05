/*jslint browser: true*/
/*global $, navigator*/
var getDevice = (function () {
    'use strict';
    var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)) {
        return 'sp';
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        return 'tab';
    } else {
        return 'other';
    }
}());

$(function () {
    'use strict';
	var ua = navigator.userAgent;
	if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('iPod') > 0) {
		$('body').addClass('ios');
	}

    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutQuart');
        event.preventDefault();
    });
	
    // sidebar
    if (getDevice === 'other') {
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });
    }
    $('#dismiss, .overlay, .close-sidebar').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').fadeOut();
    });
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('#sidebar').scrollTop(0);
        $('.overlay').fadeIn();
    });
    
    $('#menuNews').on({
        'show.bs.collapse': function () {
            $('#menuNewsOpener').addClass('open');
        },
        'hide.bs.collapse': function () {
            $('#menuNewsOpener').removeClass('open');
        }
    });
});