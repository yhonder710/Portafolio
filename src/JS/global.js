const btnBars = document.querySelector('.btn-bars');
const menuResponsive = document.querySelector('.menu-responsive');
const btnClose = document.querySelector('.btn-close');

const main = document.querySelector('.main');
const redesSociales = document.querySelector('.redes-sociales');

btnBars.addEventListener('click', () => {
  menuResponsive.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
  if (menuResponsive.classList.contains('active')) {
    main.classList.toggle('hiden');
    redesSociales.classList.toggle('hiden');
  }
});

btnClose.addEventListener('click', () => {
  menuResponsive.classList.remove('active');
  document.body.classList.remove('no-scroll');
  if (!menuResponsive.classList.contains('active')) {
    main.classList.remove('hiden');
    redesSociales.classList.remove('hiden');
  }
});
