/* =====================================================
   LIQUID GLASS JS — thêm vào cuối file main.js
   ===================================================== */

/* ── 1. Cursor glow ── */
(function () {
  const glow = document.createElement('div');
  glow.className = 'lg-cursor-glow';
  document.body.appendChild(glow);

  let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
  let cx = tx, cy = ty;

  document.addEventListener('mousemove', e => {
    tx = e.clientX;
    ty = e.clientY;
  });

  (function animate() {
    cx += (tx - cx) * 0.10;
    cy += (ty - cy) * 0.10;
    glow.style.left = cx + 'px';
    glow.style.top  = cy + 'px';
    requestAnimationFrame(animate);
  })();
})();

/* ── 2. Button — ripple theo vị trí chuột ── */
document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  * 100).toFixed(1) + '%';
    const y = ((e.clientY - r.top)  / r.height * 100).toFixed(1) + '%';
    btn.style.setProperty('--mx', x);
    btn.style.setProperty('--my', y);
  });
});

/* ── 3. Nav link — active link khi scroll ── */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav__link');

  function onScroll() {
    const scrollY = window.scrollY;
    sections.forEach(sec => {
      const top    = sec.offsetTop - 80;
      const bottom = top + sec.offsetHeight;
      const id     = sec.getAttribute('id');
      if (scrollY >= top && scrollY < bottom) {
        links.forEach(l => l.classList.remove('active-link'));
        const active = document.querySelector(`.nav__link[href="#${id}"]`);
        if (active) active.classList.add('active-link');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── 4. Skills card — staggered entrance animation ── */
(function () {
  if (!('IntersectionObserver' in window)) return;

  const cards = document.querySelectorAll(
    '.skills__content, .services__content, .about__info > div'
  );

  cards.forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition =
      `opacity 0.45s ease ${i * 0.07}s, transform 0.45s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.07}s`;
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach(el => io.observe(el));
})();
