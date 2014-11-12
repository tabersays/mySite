/* 
    Document   : myjavascript
    Created on : Apr 8, 2014, 6:59:12 PM
    Author     : Dr. Storm
    Description:
        Allows for some dynamic changes to the header and also helps with the change to mobile mode, and highlights
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
    if(day.getMonth() === 6)//if it is independence day
    {
        if(day.getDate() === 4)
        {
            document.getElementById("header").textContent="Happy Independence Day!";
        }
    }
    if(day.getMonth() === 10)//if it is halloween
    {
        if(day.getDay() === 31)
        {
            document.getElementById("header").textContent="Happy Halloween!";
        }
    }
    return;
}


$(document).ready(function(){

    dayHeader();
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




