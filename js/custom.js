$(function() {
  'use strict';
  
    //Sticky-menu & Back-to-top
    $('.back-to-top').on('click', function () {
      $('html,body').animate({scrollTop:0},1000);
    });
    $(window).on('scroll', function() {
      var sticky = $(this).scrollTop();
      if (sticky > 50) {
        $('.navbar').addClass('sticky-menu');
      } else {
        $('.navbar').removeClass('sticky-menu');
      }
      if (sticky > 400) {
        $('.back-to-top').fadeIn(300);
      } else {
        $('.back-to-top').fadeOut(300);
      }
    });
  //sidebar
  $('.navbar-toggler').on('click', function () {
    $('.sidebar').addClass('show-sidebar');
  })
  $('.close-sidebar').on('click', function () {
    $('.sidebar').removeClass('show-sidebar');
  })
  $('.s-lang').on('click', function () {
    $('.language-sidebar').addClass('show-lang');
  })
  $('.close-sidebar').on('click', function () {
    $('.language-sidebar').removeClass('show-lang');
  })


  //Searchbar
  $('.search').on('click', function () {
    $('.search-bar').addClass('search-bar-show');
  });
  $('.search-cross').on('click', function () {
    $('.search-bar').removeClass('search-bar-show');
  });


  //About-venobox-js
  $(document).ready(function () {
    $('.venobox').venobox();
  });

  //trend-slider-js
  $('.main-trending-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: '.t-left',
    nextArrow: '.t-right',
    pauseOnHover: true,
    infinite: true,
  });

  //Counter-up
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });

  //tournament-slider-js
  $('.main-tournament-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    arrows: false,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: 0,
    infinite: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
        }
      }
    ]
  });


  //Product-slider-js
  $('.main-product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.pr-left',
    nextArrow: '.pr-right',
    speed: 1500,
    pauseOnHover: false,
    infinite: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });

  //Team-slider-js(Mobile version)
  $('.main-mobile-team').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: true,
    infinite: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });
   
  //scroll-spy & Smooth-scrolling
  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 40
    }, 1000);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 40;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });

  //Preloader-js
  $(window).on('load',function(){
    $('.preloader').delay(300).fadeOut(300);
  });
  
});

//Catalog-slider-3d
var rev = $('.main-category-slider');
rev.on('init', function (event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    next2 = cur.next().next(),
    prev = cur.prev(),
    prev2 = cur.prev().prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  prev2.addClass('slick-sprev2');
  next2.addClass('slick-snext2');
  cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  slick.$prev.prev().removeClass('slick-sprev2');
  slick.$next.next().removeClass('slick-snext2');
  next = cur.next(),
    prev = cur.prev();
  //prev2.prev().prev();
  //next2.next().next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  prev.prev().addClass('slick-sprev2');
  next.next().addClass('slick-snext2');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
});

rev.slick({
  speed: 2000,
  arrows: false,
  dots: false,
  autoplay: true,
  focusOnSelect: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  infinite: true,
});

//Custom-cursor-js
const cursorInner = document.querySelector('.cursor-inner');
const cursorOuter = document.querySelector('.cursor-outer');

let previousX;
let currentX;
let previousY;
let currentY;
const defaults = {
  innerWidth: 5,
  innerHeight: 5,
  outerWidth: 35,
  outerHeight: 35,
  radius: 50,
};
let isHovered = false;
let activeLinkEl;

window.addEventListener('mousemove', (e) => {
  currentX = e.clientX;
  currentY = e.clientY;
  if (!previousX) {
    previousX = e.clientX;
    previousY = e.clientY;
  }
});

const setDimensions = (innerWidth, innerHeight, outerWidth, outerHeight, radius, opacity, padding) => {
  cursorInner.style.width = `${innerWidth - padding * 2}px`;
  cursorInner.style.height = `${innerHeight - padding * 2}px`;
  cursorOuter.style.opacity = opacity;
  cursorOuter.style.width = `${outerWidth}px`;
  cursorOuter.style.height = `${outerHeight}px`;
  cursorInner.style.borderRadius = `${radius}%`;
  cursorOuter.style.borderRadius = `${radius}%`;
};

const animation = () => {
  cursorInner.style.left = `${currentX}px`;
  cursorInner.style.top = `${currentY}px`;

  previousX = previousX + (currentX - previousX) / 10;
  previousY = previousY + (currentY - previousY) / 10;
  cursorOuter.style.left = `${previousX}px`;
  cursorOuter.style.top = `${previousY}px`;

  requestAnimationFrame(animation);
};

animation();

links.forEach((link) => {
  const newLinkElement = new LinkElement(link);
});