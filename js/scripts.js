$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul").append("<li>Hello</li>");
});

$("button#goodbye").click(function() {
  $("ul").prepend("<li>Goodbye</li>");

});

$("button#stop").click(function() {
  $("ul").append("<li>Stop</li>");

  });
});
