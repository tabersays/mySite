/* 
    Document   : myjavascript
    Created on : Apr 8, 2014, 6:59:12 PM
    Author     : Dr. Storm
    Description:
        allows for dynamic changes such as highlighting and body switching and css switching
*/
function dayHeader() {
    var day = new Date();
    if(day.getDay() === 3)
        {
            document.getElementById("header").innerHTML="Happy Commando Wednesday!";
        }
    return;
}
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
        $(".notSmall").show();
        
    }
    return;
}

$(document).ready(function(){
    
    dayHeader();
    adjustStyle($(this).width());
    
    $(window).resize(function() {
        adjustStyle($(this).width());
    });
    $('#projects').hide();
    
    $('#TRP').hide();
    
    $('#GM').hide();
    
    $('#resume').hide();
    
    $('a').hover(function(){
        $(this).addClass('highlight');
        return;
    }, function(){
        $(this).removeClass('highlight');
        return;
    });
    
    $(".about").hover(function(){
        $(this).addClass('highlight');
        return;
    }, function(){
        $(this).removeClass('highlight');
        return;
    });
    
    $(".projects").hover(function(){
        $(this).addClass('highlight');
        return;
    }, function(){
        $(this).removeClass('highlight');
        return;
    });
    
    $(".TRP").hover(function(){
        $(this).addClass('highlight');
        return;
    }, function(){
        $(this).removeClass('highlight');
        return;
    });
    
    $(".GM").hover(function(){
        $(this).addClass('highlight');
        return;
    }, function(){
        $(this).removeClass('highlight');
        return;
    });
    
    $(".resume").hover(function(){
        $(this).addClass('highlight');
        return;
    }, function(){
        $(this).removeClass('highlight');
        return;
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
        
        return;
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
        
        return;
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
        
        return;
    });
});





