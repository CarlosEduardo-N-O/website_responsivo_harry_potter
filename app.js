const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#menu');
function closeMenu() { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menu'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; nav.classList.toggle('is-open', open); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
window.matchMedia('(min-width: 601px)').addEventListener('change', closeMenu);
if ('serviceWorker' in navigator && ['http:', 'https:'].includes(location.protocol)) { navigator.serviceWorker.register('./sw.js').catch(error => console.warn('Service worker não registrado:', error)); }
