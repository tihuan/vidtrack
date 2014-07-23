(function() {
  var video =  videojs("example_video_1");

  var app = angular.module('track', []);

  app.controller('ClickController', function(){
    this.clickInfo = {};
    this.sendCoords = function(event){
      this.clickInfo.mouseX = event.layerX || event.offsetX;
      this.clickInfo.mouseY = event.layerY || event.offsetY;
      this.clickInfo.time = video.currentTime();
      console.log(this.clickInfo);
    }; // sendCoords
  }); // ClickController
}) ();
