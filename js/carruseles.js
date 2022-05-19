$(document).ready(function(){
    $("#carrusel-principal").owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:1000,
        nav:false,
        stagePadding: 0,
        animateOut: 'fadeOut',
        URLhashListener:true,
        responsive:{
            0:{
                items:1
            },
        }
    })

    $("#carrusel-peliculas").owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:1000,
        center:true,
        nav:true,
        dots:false,
        navText: ["<img src='/assets/img/prev.svg'>","<img src='/assets/img/next.svg'>"],
        URLhashListener:true,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:7,
            },
        }
    })

    $("#carrusel-destacados").owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:1000,
        nav:false,
        dots:true,
        navText: ["<img src='/assets/img/prev.svg'>","<img src='/assets/img/next.svg'>"],
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3,
            },
        }
    })
})