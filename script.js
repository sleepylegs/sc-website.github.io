// Smooth scrolling
$('a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

// Slide-in animation on scroll
$(window).scroll(function () {
  $('.slide-in').each(function () {
    const slideInPos = $(this).offset().top + 50;
    const windowHeight = $(window).height();
    const scrollPos = $(window).scrollTop() + windowHeight;

    if (scrollPos > slideInPos) {
      $(this).addClass('active');
    }
  });
});

// Toggle mobile navigation menu
$('.menu-toggle').click(function () {
  $('nav ul').slideToggle(300); // Adjust the duration (300 milliseconds) to control the speed of the animation
  $(this).toggleClass('active');
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('nav').classList.toggle('show');
});



// Show current year in the footer
const currentYear = new Date().getFullYear();
$('footer p').html(`&copy; ${currentYear} Pathways School Noida Student Council`);
