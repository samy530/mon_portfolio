(() => {
  const header = document.querySelector('header');
  if (!header) return;

  const toggle = header.querySelector('.menu-toggle');
  const nav = header.querySelector('nav');
  if (!toggle || !nav) return;

  // Toggle open/close
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Fermer le menu au clic d’un lien (mobile)
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('active'));
  });

  // Sécurité: si on repasse en desktop, on enlève l'état "active"
  const mq = window.matchMedia('(min-width: 769px)');
  const sync = () => nav.classList.remove('active');
  mq.addEventListener ? mq.addEventListener('change', sync) : mq.addListener(sync);
})();