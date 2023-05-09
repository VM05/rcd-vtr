$('.boton-1').click(function (event) {
  event.preventDefault();
  $('.contenedor-1').fadeIn();
  $('.contenedor-2').fadeOut();
  $(this).addClass('boton-activo');
  $('.boton-2').removeClass('boton-activo');
});

$('.boton-2').click(function (event) {
  event.preventDefault();
  $('.contenedor-2').fadeIn();
  $('.contenedor-1').fadeOut();
  $(this).addClass('boton-activo');
  $('.boton-1').removeClass('boton-activo');
});

//Filtro
$('#filtro-trigger').click(function () {
  $('.filtro__head').toggleClass('open');
  $('#filtro-box').fadeToggle();
});

$(document).ready(function () {
  //Paginacion Datos de Actores
  var datosActores = $('.datos-actores-grid .item-datos-actores');
  var numdatos = datosActores.length;
  let datosPerPage;

  if (window.innerWidth < 560) {
    datosPerPage = 3;
  } else if (window.innerWidth < 900) {
    datosPerPage = 6;
  } else if (window.innerWidth < 1030) {
    datosPerPage = 9;
  } else {
    datosPerPage = 12;
  }
  datosActores.slice(datosPerPage).hide();

  $('#pagination-datos').pagination({
    items: numdatos,
    edges: 2,
    displayedPages: 3,
    itemsOnPage: datosPerPage,
    prevText: '&laquo;',
    nextText: '&raquo;',
    autoHidePrevious: true,
    autoHideNext: true,
    onPageClick: function (pageNumber) {
      $('body').scrollTop(0);
      var showFrom = perPage * (pageNumber - 1);
      var showTo = showFrom + perPage;
      datosActores.hide().slice(showFrom, showTo).show();
    },
  });

  //Paginacion Articulos
  var items = $('.contenedor-articulos .item-articulo');
  var numItems = items.length;
  let perPage;
  if (window.innerWidth < 560) {
    perPage = 3;
  } else if (window.innerWidth < 900) {
    perPage = 6;
  } else if (window.innerWidth < 1040) {
    perPage = 9;
  } else {
    perPage = 12;
  }

  items.slice(perPage).hide();

  $('#pagination-container').pagination({
    items: numItems,
    edges: 2,
    displayedPages: 3,
    itemsOnPage: perPage,
    prevText: '&laquo;',
    nextText: '&raquo;',
    autoHidePrevious: true,
    autoHideNext: true,
    onPageClick: function (pageNumber) {
      $('body').scrollTop(0);
      var showFrom = perPage * (pageNumber - 1);
      var showTo = showFrom + perPage;
      items.hide().slice(showFrom, showTo).show();
    },
  });
});
