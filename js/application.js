(function() {
  var app = angular.module('track', []);
  app.controller('ClickController', function(){
    var video =  videojs("example_video_1");
    this.clickInfo = {};
    this.sendCoords = function(event){

      if ( event.offsetX == null ) {
        this.clickInfo.mouseX = event.layerX;
        this.clickInfo.mouseY = event.layerY;
        this.clickInfo.time = video.currentTime();
      } else {
        this.clickInfo.mouseX = event.offsetX;
        this.clickInfo.mouseY = event.offsetY;
        this.clickInfo.time = video.currentTime();
      }

      var clickInfo = "x: " + this.clickInfo.mouseX + ", " +
                             "y: " + this.clickInfo.mouseY + ", " +
                             "time: " + this.clickInfo.time;

      console.log(this.clickInfo);
    }; // sendCoords
  }); // ClickController
}) ();
