(function() {
  var video =  videojs("example_video_1");

  var app = angular.module('track', []);

  app.controller('ClickController', function(){
    this.clickInfo = {};
    this.sendCoords = function(event){
      this.clickInfo.mouseX = event.layerX || event.offsetX;
      this.clickInfo.mouseY = event.layerY || event.offsetY;
      this.clickInfo.time = video.currentTime();
      var json_text = angular.toJson(this.clickInfo)
      console.log("Sending the following JSON string to server:");
      console.log(json_text);
      $.ajax({
        url: "/gatherinfo",
        type: "POST",
        data: json_text
      });
    }; // sendCoords
  }); // ClickController
}) ();
