$(function() {

    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/VanMorrisonPreciousTime.m4a");
    
    $(".theme-button").on("click", function() {
      audioElement.play();
    });
    $(".pause-button").on("click", function() {
      audioElement.pause();
    });

});
