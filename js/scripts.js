$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello</li>");
    $("ul#webpage").prepend("<li>Beyonce</li>");

    $("ul#user").children("li").first().click(function() {
      $(this).remove();
});
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
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

});
