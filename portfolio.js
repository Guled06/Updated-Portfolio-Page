$(function() {

    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/VanMorrisonPreciousTime.m4a");

    var audioElement1 = document.createElement("audio");
    audioElement1.setAttribute("src", "assets/BillyCurrington.m4a");
    
    $(".theme-button").on("click", function() {
      audioElement.play();
    });
    $(".pause-button").on("click", function() {
      audioElement.pause();
    });

    $(".theme-button1").on("click", function() {
      audioElement1.play();
    });
    $(".pause-button1").on("click", function() {
      audioElement1.pause();
    });

});
