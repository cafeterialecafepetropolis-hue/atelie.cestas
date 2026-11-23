const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) menuToggle.textContent = '☰';
  });
});

document.querySelectorAll('[data-product]').forEach((link) => {
  link.addEventListener('click', () => {
    const product = link.dataset.product;
    const orderLink = document.querySelector('#pedido .button-light');
    if (orderLink && product) {
      orderLink.href = `https://wa.me/5524992668661?text=${encodeURIComponent(`Oi Ateliê! Quero encomendar a cesta “${product}”.`)}`;
    }
  });
});
