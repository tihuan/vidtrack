(function() {
  var video =  videojs("example_video_1");
  var app = angular.module('track', []);

  app.controller('ClickController', function(){
    this.clickInfo = {};
    this.sendCoords = function(event){
      // event.layer for Firefox and event.offset for other browsers
      this.clickInfo.mouseX = event.layerX || event.offsetX;
      this.clickInfo.mouseY = event.layerY || event.offsetY;
      this.clickInfo.time = video.currentTime();

      var json_clickInfo = angular.toJson(this.clickInfo)

      console.log("Sending the following JSON data to server:");
      console.log(json_clickInfo);

      $.ajax({
        url: "/gatherinfo",
        type: "POST",
        data: json_clickInfo,
        success: function() {
          console.log("JSON was received by the server successfully.");
        }
      });
    }; // sendCoords
  }); // ClickController
}) ();
