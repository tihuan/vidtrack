(function() {
  var video =  videojs("example_video_1");
  var app = angular.module('track', []);
  app.controller('ClickController', function(){
    this.sendCoords = function(event){
      this.clickInfo = {};
      // event.layer for Firefox and event.offset for other browsers
      this.clickInfo.mouseX = event.layerX || event.offsetX;
      this.clickInfo.mouseY = event.layerY || event.offsetY;
      this.clickInfo.time = video.currentTime();
      this.clickInfo.json = angular.toJson(this.clickInfo);

      console.log("Sending the following JSON data to server:");
      console.log(this.clickInfo.json);

      $.ajax({
        url: "/gatherinfo",
        type: "POST",
        data: this.clickInfo.json,
        success: function() {
          console.log("JSON was received by the server successfully.");
        }
      }); // ajax
    }; // sendCoords
  }); // ClickController
}) ();
