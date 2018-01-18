$(document).ready(function() {

  // NEW Smooth scroll
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });


    // OLD Navigation menu scrollTo
    // $('header nav ul li a').click(function( event ) {
    //     event.preventDefault();
    //     var section = $(this).attr('href');
    //     var section_pos = $(section).position();
    //
    //     if (section_pos){
    //         $(window).scrollTo({ top: section_pos.top, left: '0px' }, 1500);
    //     }
    // });
    //
    // $('.app_link').click(function( e ) {
    //     event.preventDefault();
    //     $(window).scrollTo({ top: $('#hero').position().top, left: '0px' }, 1000);
    // });


    //Show & Hide menu on mobile
    $('.burger_icon').click(function() {
        $('header nav').toggleClass('show');
        $('header .burger_icon').toggleClass('active');
    });


    //wow.js on scroll animations initialization
    wow = new WOW(
      {
          animateClass: 'animated',
          mobile: false,
          offset: 50
      }
    );
    wow.init();


    //parallax effect initialization
    $('.hero').parallax('50%', 0.3);
    $('.parallax-container').parallax('50%', 0.3);


    //Nice scroll initialization
    $('html').niceScroll({
        scrollspeed: 0,
        autohidemode: false,
        cursorwidth: 8,
        cursorborderradius: 8,
        cursorborder: '0',
        background: 'rgba(48, 48, 48, .4)',
        cursorcolor: '#1f1f1f',
        zindex: 999
    });


    //Testimonials slider initialization
    $('#tslider').owlCarousel({
        items: 1,
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        responsive: true,
        autoPlay: true,
        transitionStyle: 'fade'
    });


    //Mailchimp subscription form initialization
    $('#submit_form').submit(function() {
        $('#mc_submit').attr('disabled', 'disabled');
        processing('icon', 'loading');
    });

    if ($('#submit_form').length){
        //Mailchim Subscription form
        $('#submit_form').ajaxChimp({
            callback: chimpResponce
        });
    }

    //Mail chimp callback function
    function chimpResponce( resp ) {
        if (resp.result === 'success'){
            processing('loading', 'icon');
            $('#mc_submit').removeAttr('disabled', 'disabled');
            $('#submit_form #mc-email').val('');
            $('#error_msg').hide();
            $('#success_msg').show();
        } else {
            processing('loading', 'icon');
            $('#success_msg').hide();
            $('#error_msg').show();
            $('#mc_submit').removeAttr('disabled', 'disabled');
        }
    }

    function processing( hide, show ) {
        $('#mc_submit i').removeClass(hide).addClass(show);
    }


    //Popup video
    $('#play_video').click(function( e ) {
        e.preventDefault();

        var video_link = $(this).data('video');
        video_link = '<iframe src="' + video_link + '" width="500" height="208" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen target="_blank"></iframe>';

        $('.about_video').append(video_link).fadeIn(200);
    });

    $('.close_video').click(function( e ) {
        e.preventDefault();

        $('.about_video').fadeOut(200, function() {
            $('iframe', this).remove();
        });

    });



});



// Banner video;
$(document).ready(function () {
    $(window).on('load scroll', function () {
        var scrolled = $(this).scrollTop();
        $('#title').css({
            'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
            'opacity': 1 - scrolled / 400 // fade out at 400px from top
        });
        $('#hero-vid').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
    });

    // video controls
    $('#state').on('click', function () {
        var video = $('#hero-vid').get(0);
        var icons = $('#state > span');
        $('#overlay').toggleClass('fade');
        if (video.paused) {
            video.play();
            icons.removeClass('fa-play').addClass('fa-pause');
        } else {
            video.pause();
            icons.removeClass('fa-pause').addClass('fa-play');
        }
    });
});