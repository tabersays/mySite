/* 
    Document   : myjavascript
    Created on : Apr 8, 2014, 6:59:12 PM
    Author     : Dr. Storm
    Description:
        allows for dynamic changes such as highlighting and body switching and css switching
*/


function dayHeader() //Allows the header to change for different holidays
{
    var day = new Date();
    if(day.getDay() === 3)//if it is commando Wednesday
        {
            document.getElementById("header").textContent="Happy Commando Wednesday!";
        }
    if(day.getMonth() === 5)
        {
            if(day.getDate() === 10)
            {
                document.getElementById("header").textContent="Happy Birthday Grandma!";
            }
        }
    if(day.getMonth() === 4)//if it is mothers day
    {
        if(day.getDay() === 0)
            {
                if(8 <= day.getDate() <= 14)
                    {
                        document.getElementById("header").textContent="Happy Mother's Day!";
                    }
            }
    }
    if(day.getMonth() === 5)//if it is fathers day
    {
        if(day.getDay() === 0)
        {
            if(15 <= day.getDate() <= 21)
            {
                document.getElementById("header").textContent="Happy Father's Day!";
            }
        }
    }
    if(day.getMonth() === 6)//if it is independance day
    {
        if(day.getDate() === 4)
        {
            document.getElementById("header").textContent="Happy Independence Day!";
        }
    }
    return;
}
/*function adjustStyle(width) {
    width = parseInt(width);
    if (width < 700) {
        $("#styleType").attr("href", "mobile.css");
        //$(".notSmall").hide();

    }
    else if (width > 700 && width < 1300) {
        $("#styleType").attr("href", "small.css");
        //$(".notSmall").show();

    }
    else {
        $("#styleType").attr("href", "mystyle.css");
        //$(".notSmall").show();

    }
    return;
}*/


$(document).ready(function(){

    dayHeader();
/*    adjustStyle($(this).width());*/

/*    $(window).resize(function() {
        adjustStyle($(this).width());
    });*/
    $(window).resize(function(){
        if(window.innerWidth > 768) {
            $("#nav").removeAttr("style");
        }
    });
    $("#nav").addClass("js").before('<div id="menu">&nbsp;</div>');
    $("#menu").click(function(){
        $("#nav").toggle();
    });


    $('.click').hover(function(){
        $(this).addClass('highlight');
        return;
    }, function(){
        $(this).removeClass('highlight');
        return;
    });

});




