window.addEventListener('scroll', function() {
  var scrollSection = document.getElementById('scroll-section');
  var scrollPosition = scrollSection.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 2;

  if (scrollPosition < screenPosition) {
    scrollSection.classList.add('show');
  }
  else {
    scrollSection.classList.remove('show');
  }
});

window.addEventListener('scroll', function() {
  var backToTopButton = document.querySelector('.back-to-top');
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});


document.querySelector('.back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

var prevScrollPos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        document.querySelector(".header").classList.remove("hidden");
      } else {
        document.querySelector(".header").classList.add("hidden");
      }
      prevScrollPos = currentScrollPos;
    }

