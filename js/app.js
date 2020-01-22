$(document).ready(function() {
  $(".main").onepage_scroll({
    sectionContainer: "section",
    responsiveFallback: 600,
    animationTime: 800,
    loop: false
  });
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $(".main").moveTo(1);
}
