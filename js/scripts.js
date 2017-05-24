$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello</li>");
    $("ul#webpage").prepend("<li>Beyonce</li>");
    $("li").click(function() {
      alert("hello");

    });

});

$("button#goodbye").click(function() {
  $("ul#user").prepend("<li>Goodbye</li>");
  $("ul#webpage").prepend("<li>Bjork</li>");


});

$("button#stop").click(function() {
  $("ul#user").prepend("<li>Stop</li>");
  $("ul#webpage").prepend("<li>Drake</li>");
  });



});
