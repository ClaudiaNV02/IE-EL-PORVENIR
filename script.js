const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebarMenu');
const overlayBg = document.getElementById('overlayBg');
const sidebarClose = document.getElementById('sidebarClose');

function openMenu(){
  sidebar.classList.add('active');
  overlayBg.classList.add('active');
  document.body.classList.add('no-scroll');
  menuBtn.setAttribute('aria-expanded', 'true');
  sidebar.setAttribute('aria-hidden', 'false');
}

function closeMenu(){
  sidebar.classList.remove('active');
  overlayBg.classList.remove('active');
  document.body.classList.remove('no-scroll');
  menuBtn.setAttribute('aria-expanded', 'false');
  sidebar.setAttribute('aria-hidden', 'true');
}

menuBtn.addEventListener('click', openMenu);
sidebarClose.addEventListener('click', closeMenu);
overlayBg.addEventListener('click', closeMenu);

// Cerrar con la tecla Escape
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeMenu();
});

// Cerrar al hacer clic en un enlace del menú
document.querySelectorAll('.sidebar-nav a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

/*noticia*/
