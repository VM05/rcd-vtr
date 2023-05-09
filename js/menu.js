const hamburguesa = document.querySelector('.hamburguesa');
const lupaMobile = document.querySelector('.lupa-mobile a');

hamburguesa.addEventListener('click', () => {
  const menuMobile = document.querySelector('.lista-menu');
  hamburguesa.classList.toggle('change');
  if (hamburguesa.classList.contains('change')) {
    menuMobile.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    menuMobile.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
