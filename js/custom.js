/**
 * Created by cstodd on 4/14/16.
 */

$(document).ready(function (){
    // function showZoomMsg(){
    //     $('h4.zoomOutMsg').show('1100');
    // }
    $('span.zoomOutMsg').hide();
    $('small.zoomMsg, .zoomMsg2, .zoomMsg3, .zoomMsg4').css('opacity', '0');

    $('p > img.zoomTarget').click(function (){
        $('span.zoomOutMsg').show('1100');

    })

    $('.fadeInLeft').click(function (){
        $('span.zoomOutMsg').hide('fast');

    })

    $('.iphone > p > img.pic1').mouseover(function (){
        $('small.zoomMsg').css('opacity', '1.0');
    })
    $('.iphone > p > img.pic1').mouseleave(function (){
        $('small.zoomMsg').css('opacity', '0');
    })

    $('.iphone > p > img.pic2').mouseover(function (){
        $('small.zoomMsg2').css('opacity', '1.0');
    })
    $('.iphone > p > img.pic2').mouseleave(function (){
        $('small.zoomMsg2').css('opacity', '0');
    })

    $('.iphone > p > img.pic3').mouseover(function (){
        $('small.zoomMsg3').css('opacity', '1.0');
    })
    $('.iphone > p > img.pic3').mouseleave(function (){
        $('small.zoomMsg3').css('opacity', '0');
    })

    $('.iphone > p > img.pic4').mouseover(function (){
        $('small.zoomMsg4').css('opacity', '1.0');
    })
    $('.iphone > p > img.pic4').mouseleave(function (){
        $('small.zoomMsg4').css('opacity', '0');
    })


});