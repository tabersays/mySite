/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
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
    
    $(".TRP").click(function(){
        $('#about').hide();
        $('.about').removeClass('active');
        
        $('#projects').hide();
        $('.projects').removeClass('active');
    
        $('#TRP').show();
        $('.TRP').addClass('active');
    
        $('#GM').hide();
        $('.GM').removeClass('active');
    
        $('#resume').hide();
        $('.resume').removeClass('active');
    });
    
    $(".GM").click(function(){
        $('#about').hide();
        $('.about').removeClass('active');
        
        $('#projects').hide();
        $('.projects').removeClass('active');
    
        $('#TRP').hide();
        $('.TRP').removeClass('active');
    
        $('#GM').show();
        $('.GM').addClass('active');
    
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





