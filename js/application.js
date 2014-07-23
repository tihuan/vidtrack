(function() {
  var app = angular.module('track', []);
  app.controller('ClickController', function(){
    var video =  videojs("example_video_1");
    this.coords = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.sendCoords = function(event){

      if ( event.offsetX == null ) {
        this.mouseX = event.originalEvent.layerX;
        this.mouseY = event.originalEvent.layerY;
      } else {
        this.mouseX = event.offsetX;
        this.mouseY = event.offsetY;
      }
      console.log(this.mouseX);
      console.log("x: " + this.mouseX + ", " +
                         "y: " + this.mouseY + ", " +
                         "time: " + video.currentTime());
    };
  }) // ClickController
}) ();
