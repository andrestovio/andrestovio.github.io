// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Dropdown toggle on mobile (tap)
document.querySelectorAll('.nav-links li').forEach(li => {
  li.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && li.querySelector('.dropdown')) {
      e.stopPropagation();
      li.classList.toggle('open');
    }
  });
});

// Close nav on outside click
document.addEventListener('click', (e) => {
  if (navLinks && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});

// Highlight active nav link based on current page
const currentPage = window.location.pathname.replace('/', '') || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
    link.classList.add('active');
  }
});
