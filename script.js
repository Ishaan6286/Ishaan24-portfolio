/* ─────────────────────────────────────────────
   PORTFOLIO – script.js
───────────────────────────────────────────── */

// ── NAV SCROLL EFFECT ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

// ── REVEAL ON SCROLL ──
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Small staggered delay based on sibling index in parent
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, idx * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ── ACTIVE NAV LINK HIGHLIGHT ──
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.color = '';
        a.style.background = '';
        if (a.getAttribute('href') === `#${entry.target.id}`) {
          if (!a.classList.contains('nav-cta')) {
            a.style.color = 'var(--text)';
            a.style.background = 'var(--surface)';
          }
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ── TILT EFFECT ON CARDS ──
function addTilt(selector, maxTilt = 8) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `translateY(-6px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform .4s ease';
      setTimeout(() => { card.style.transition = ''; }, 400);
    });
  });
}
addTilt('.project-card', 6);
addTilt('.stat-card', 5);

// ── SMOOTH COUNTER ANIMATION ──
function animateCounter(el, target, suffix = '', duration = 1800) {
  const start = performance.now();
  const isDecimal = target % 1 !== 0;
  const update = (time) => {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = eased * target;
    el.textContent = isDecimal ? current.toFixed(2) + suffix : Math.round(current) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const raw = el.dataset.count;
      const suffix = el.dataset.suffix || '';
      animateCounter(el, parseFloat(raw), suffix);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

// Attach data attributes to stat nums
const statMap = [
  { text: '8.59', count: 8.59, suffix: '' },
  { text: '3+',   count: 3,    suffix: '+' },
  { text: '2',    count: 2,    suffix: '' },
  { text: '2K+',  count: 2,    suffix: 'K+' },
];
document.querySelectorAll('.stat-num').forEach((el, i) => {
  if (statMap[i]) {
    el.dataset.count   = statMap[i].count;
    el.dataset.suffix  = statMap[i].suffix;
    counterObserver.observe(el);
  }
});

// ── CURSOR GRADIENT GLOW (desktop only) ──
if (window.matchMedia('(hover: hover)').matches) {
  document.addEventListener('mousemove', e => {
    document.documentElement.style.setProperty('--mx', e.clientX + 'px');
    document.documentElement.style.setProperty('--my', e.clientY + 'px');
  });
}

// ── TYPED HERO TITLE EFFECT ──
const typedEl = document.querySelector('.hero-title');
if (typedEl) {
  const phrases = [
    'Full Stack Developer & AI Enthusiast',
    'Building Intelligent Systems',
    'CS Student @ RIT Bangalore',
  ];
  let pi = 0, ci = 0, deleting = false;
  const minSpeed = 55, maxSpeed = 95, pauseMs = 2200;

  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      typedEl.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) {
        deleting = true;
        setTimeout(type, pauseMs);
        return;
      }
    } else {
      typedEl.textContent = phrase.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
      }
    }
    setTimeout(type, deleting
      ? minSpeed * 0.5
      : Math.random() * (maxSpeed - minSpeed) + minSpeed
    );
  }
  // Add caret style
  typedEl.style.borderRight = '2px solid var(--accent-1)';
  typedEl.style.paddingRight = '4px';
  typedEl.style.whiteSpace = 'nowrap';
  typedEl.style.overflow = 'hidden';
  type();
}
