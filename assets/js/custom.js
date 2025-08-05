(function ($) {
  "use strict";

  // Preloder
  // jQuery(window).on("load", function () {
  //   $(".preloader").delay(1000).fadeOut("slow");
  // });
 
  jQuery(window).on("load", function () {
    jQuery(".loader-page")
      .delay(1000)
      .fadeOut("slow", function () {
        jQuery(this).remove();
      });
  });


  //menu 1
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header.style-1, .header-area-2");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  $(".mobile-menu-btn").on("click", function () {
    $(".main-menu").addClass("show-menu");
  });
  $(".menu-close-btn").on("click", function () {
    $(".main-menu").removeClass("show-menu");
  });

  // mobile-drop-down
  $(".dropdown-icon").on("click", function () {
    // $(this).next('.mob-submenu').slideToggle();
    $(this).toggleClass("active").next("ul").slideToggle();
    $(this).parent().siblings().children("ul").slideUp();
    $(this).parent().siblings().children(".active").removeClass("active");
  });
  //Active menu
  const currentLocation = location.href;
  const menuItem = document.querySelectorAll("ul li a");
  const menuLength = menuItem.length;
  for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].className = "active";
    }
  }

  //sticky menu
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
      $(".position_top").addClass("sticky");
    } else {
      $(".position_top").removeClass("sticky");
    }
  });

  //Mobile menu
  $(".cross-btn").on("click", function (event) {
    //$(this).toggleClass('h-active');
    $(".main-nav").toggleClass("slidenav");
  });
  $(".remove").on("click", function (event) {
    $(".main-nav").removeClass("slidenav");
  });

  $(".main-nav .bi").on("click", function (event) {
    var $fl = $(this);
    $(this).parent().siblings().find(".sub-menu").slideUp();
    $(this).parent().siblings().find(".bi").addClass("bi-chevron-down");
    if ($fl.hasClass("bi-chevron-down")) {
      $fl.removeClass("bi-chevron-down").addClass("bi-chevron-up");
    } else {
      $fl.removeClass("bi-chevron-up").addClass("bi-chevron-down");
    }
    $fl.next(".sub-menu").slideToggle();
  });

  //Image popup
  $(".image-popup").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    image: {
      verticalFit: false,
    },
  });

  // Get nicescroll
  $(".sidebar").niceScroll(".sidebar-scroll", {
    cursorcolor: "#FF4F4F",
    cursorwidth: "10px",
  });

  //project slider
  var swiper = new Swiper(".project-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1200,
    effect: "slide",
    //autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }, // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 4,
      },
    },
  });

  //Testimonial slider
  var swiper = new Swiper(".testimonial-slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".testimonial-slider2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next-c",
      prevEl: ".swiper-button-prev-c",
      clickable: true,
    },
    thumbs: {
      swiper: swiper,
    },
  });

  jQuery(window).on("load", function () {
    new WOW().init();
    window.wow = new WOW({
      boxClass: "wow", // default
      animateClass: "animated", // default
      offset: 0, // default
      mobile: true, // default
      live: true, // default
      offset: 100,
    });
    window.wow.init();
  });

  //---------hero sliderrr-------------//
  const heroSwiper = new Swiper(".hero-swiper", {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: -100,
    //     modifier: 1,
    //     slideShadows: true,
    // },
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: ["-100%", 0, 500],
        scale: 0.8,
        opacity: 0.3,
      },
      next: {
        translate: ["100%", 0, 500],
        scale: 0.8,
        opacity: 0.3,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //---------------added newly------------//
})(jQuery);
