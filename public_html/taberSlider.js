/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function SliderController($scope){
    $scope.mySlider = "sliderPic/SliderBar.png";
    $scope.slider = ['-','-','-','-','-','-','-','-','-','-'];
    
//    $scope.drawSlider = function(){
//       for(slide in slider)
//       {
//           var text;
//           return text += slide;
//       }
//    };
//    $scope.text = drawSlider;
    $scope.value = 5;
}
//{
//    var sliderPics = ["sliderPic/SliderBar.png", "sliderPic/SliderBut.png"];
//    var app = angular.module('Slider',[]);
//    app.controller('SliderController', function()
//    {
//        this.mySlider = sliderPics;
//    });
//    
//});

