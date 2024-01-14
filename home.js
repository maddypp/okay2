console.log("script loaded");
console.log("CodeHaven V1.0");

$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });


width = screen.width;

if (width <= 890) {
  console.log("small screen initialized:", width);
  document.getElementById("f3").innerHTML = "Can I Purchase an Indivigual Service?"
} 