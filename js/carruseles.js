$(document).ready(function () {
  $('#carrusel-principal').owlCarousel({
    loop: true,
    autoplay: true,
    slideSpeed: 5000,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    nav: false,
    dots: false,
    stagePadding: 0,
    animateOut: 'fadeOut',
    URLhashListener: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $('#carrusel-peliculas').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    center: true,
    nav: true,
    dots: false,
    navText: ["<img src='/assets/img/prev.svg'>", "<img src='/assets/img/next.svg'>"],
    URLhashListener: true,
    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 5,
      },

      1240: {
        items: 7,
      },
    },
  });

  $('#carrusel-destacados').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    nav: false,
    dots: true,
    center: true,
    margin: 30,
    navText: ["<img src='/assets/img/prev.svg'>", "<img src='/assets/img/next.svg'>"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1240: {
        items: 3,
      },
    },
  });

  $('.carrusel-datos-curiosos').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 1000,
    nav: true,
    dots: true,
    center: false,
    margin: 30,
    navText: ["<img src='/assets/img/left-thin.svg'>", "<img src='/assets/img/right-thin.svg'>"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1240: {
        items: 4,
        nav: true,
        dots: true,
      },
    },
  });

  $('.carrusel-datos-actores').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    slideSpeed: 5000,
    nav: true,
    dots: true,
    center: false,
    margin: 30,
    navText: ["<img src='/assets/img/left-thin.svg'>", "<img src='/assets/img/right-thin.svg'>"],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,
      },
      768: {
        items: 2,
      },
      1240: {
        items: 4,
      },
    },
  });

  $('.carrusel-articulo-peliculas').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    slideSpeed: 5000,
    nav: true,
    dots: false,
    margin: 20,
    navText: ["<img src='/assets/img/left-thin.svg'>", "<img src='/assets/img/right-thin.svg'>"],
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1240: {
        items: 5,
      },
    },
  });

  $('.carrusel-novedades').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    slideSpeed: 5000,
    nav: true,
    dots: false,
    margin: 15,
    navText: ["<img src='/assets/img/left-thin.svg'>", "<img src='/assets/img/right-thin.svg'>"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1240: {
        items: 3,
      },
    },
  });

  $('.carrusel-reparto').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    slideSpeed: 5000,
    nav: true,
    dots: false,
    margin: 15,
    navText: ["<img src='/assets/img/left-thin.svg'>", "<img src='/assets/img/right-thin.svg'>"],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1240: {
        items: 3,
      },
    },
  });

  //Carrusel Panoramas

  let panoramas = $('.contenedor-panoramas');
  panoramas.addClass('owl-carousel');
  panoramas.addClass('owl-theme');

  $('.contenedor-panoramas').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    slideSpeed: 5000,
    margin: 20,
    nav: false,
    dots: true,
    navText: ["<img src='/assets/img/left-thin.svg'>", "<img src='/assets/img/right-thin.svg'>"],
    responsive: {
      0: {
        items: 1,
      },
      730: {
        items: 3,
      },
      1240: {
        items: 5,
      },
    },
  });

  //Carruseles Responsive

  if ($(window).width() < 832) {
    //Carrusel Novedades

    let novedades = $('.novedades-grid');
    novedades.addClass('owl-carousel');
    novedades.addClass('owl-theme');

    $('.novedades-grid').owlCarousel({
      loop: true,
      autoplay: false,
      autoplayTimeout: 5000,
      slideSpeed: 5000,
      margin: 20,
      nav: false,
      dots: true,
      navText: ["<img src='/assets/img/left-thin.svg'>", "<img src='/assets/img/right-thin.svg'>"],
      responsive: {
        0: {
          items: 1,
        },
        700: {
          items: 2,
        },
        830: {
          items: 2,
        },
      },
    });

    //Carrusel Clasicos

    let clasicos = $('.contenedor-clasicos-grid');
    clasicos.addClass('owl-carousel');
    clasicos.addClass('owl-theme');

    $('.contenedor-clasicos-grid').owlCarousel({
      loop: true,
      autoplay: false,
      autoplayTimeout: 5000,
      slideSpeed: 5000,
      margin: 20,
      nav: false,
      dots: true,
      navText: ["<img src='/assets/img/left-thin.svg'>", "<img src='/assets/img/right-thin.svg'>"],
      responsive: {
        0: {
          items: 1,
        },
        700: {
          items: 2,
        },
        830: {
          items: 2,
        },
      },
    });
  } else {
    //Carrusel Novedades
    let novedades = $('novedades-grid');
    novedades.trigger('destroy.owl.carousel');
    novedades.addClass('off');

    //Carrusel Clasicos
    let clasicos = $('.contenedor-clasicos-grid');
    clasicos.trigger('destroy.owl.carousel');
    clasicos.addClass('off');
  }
});
