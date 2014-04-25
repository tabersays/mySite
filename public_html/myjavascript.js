/* 
    Document   : myjavascript
    Created on : Apr 8, 2014, 6:59:12 PM
    Author     : Dr. Storm
    Description:
        allows for dynamic changes such as highlighting and body switching and css switching
*/
function adjustStyle(width) {
    width = parseInt(width);
    if (width < 700) {
        $("#styleType").attr("href", "mobile.css");
        $(".notSmall").hide();
    }
    else if (width > 700 && width < 1100) {
        $("#styleType").attr("href", "small.css");
        $(".notSmall").show();
    }
    else {
        $("#styleType").attr("href", "mystyle.css"); 
        
    }
}
$(document).ready(function(){
    
    adjustStyle($(this).width());
    $(window).resize(function() {
        adjustStyle($(this).width());
    });
    $('#projects').hide();
    
    $('#TRP').hide();
    
    $('#GM').hide();
    
    $('#resume').hide();
    
    $(".about").hover(function(){
        $(this).addClass('highlight');
    }, function(){
        $(this).removeClass('highlight');
    });
    
    $(".projects").hover(function(){
        $(this).addClass('highlight');
    }, function(){
        $(this).removeClass('highlight');
    });
    
    $(".TRP").hover(function(){
        $(this).addClass('highlight');
    }, function(){
        $(this).removeClass('highlight');
    });
    
    $(".GM").hover(function(){
        $(this).addClass('highlight');
    }, function(){
        $(this).removeClass('highlight');
    });
    
    $(".resume").hover(function(){
        $(this).addClass('highlight');
    }, function(){
        $(this).removeClass('highlight');
    });
    
    /*******Needs*work*will*be*a*function*call**************************/
    $(".about").click(function(){
        $('#about').show();
        $('.about').addClass('active');
        
        $('#projects').hide();
        $('.projects').removeClass('active');
    
        $('#TRP').hide();
        $('.TRP').removeClass('active');
    
        $('#GM').hide();
        $('.GM').removeClass('active');
    
        $('#resume').hide();
        $('.resume').removeClass('active');
    });
    
    $(".projects").click(function(){
        $('#about').hide();
        $('.about').removeClass('active');
        
        $('#projects').show();
        $('.projects').addClass('active');
    
        $('#TRP').hide();
        $('.TRP').removeClass('active');
    
        $('#GM').hide();
        $('.GM').removeClass('active');
    
        $('#resume').hide();
        $('.resume').removeClass('active');
    });
    
   
    
    $(".resume").click(function(){
        $('#about').hide();
        $('.about').removeClass('active');
        
        $('#projects').hide();
        $('.projects').removeClass('active');
    
        $('#TRP').hide();
        $('.TRP').removeClass('active');
    
        $('#GM').hide();
        $('.GM').removeClass('active');
        
        $('#resume').show();
        $('.resume').addClass('active');
    });
});





