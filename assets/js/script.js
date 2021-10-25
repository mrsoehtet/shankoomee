//  --------------------loader-------------------
$(window).on('load',function(){
  $('.loader').fadeOut();
})
//  --------------------mobile view navbar dropdown toggler btn-------------------
let navbarCollapse = document.querySelector('.navbar-collapse');
let togglerBar = document.querySelector('.toggler-bar');
let navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click', function () {
  if (navbarCollapse.classList.contains("show")) {
    togglerBar.classList.remove('fa-times');
    togglerBar.classList.add('fa-bars');
  } else {
    togglerBar.classList.remove('fa-bars');
    togglerBar.classList.add('fa-times');
  }
})





let mobileWidth = window.matchMedia("(max-width: 991px)")
myFunction(mobileWidth);
mobileWidth.addListener(myFunction);

function myFunction(x) {
  if (x.matches) { // If media query matches

    // work in max in 991 width
    $('.navbar-nav li').click(function () {
      $(this).toggleClass('current').find('.dropdown-menu').stop().slideToggle('fast');
    });
  } else {
    $('.navbar-nav li').mouseenter(function () {
      $(this).addClass('current').find('.dropdown-menu').stop().slideDown('fast');
    });

    $('.navbar-nav li').mouseleave(function () {
      $(this).removeClass('current').find('.dropdown-menu').stop().slideUp('fast');
    });
  }
}




// $('.navbar-nav li').hover(function() {
//   $(this).toggleClass('current').find('.dropdown-menu').stop().slideToggle('fast');
// });



//  banner slide
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1500,
});

