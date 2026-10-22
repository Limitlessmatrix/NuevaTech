// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.section').forEach((s) => {
  s.style.opacity = '0';
  s.style.transform = 'translateY(24px)';
  s.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(s);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section').forEach((s) => s.classList.add('visible'));
});

// Add visible class styles
const style = document.createElement('style');
style.textContent = '.section.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// Contact form confirmation after FormSubmit redirect
if (new URLSearchParams(window.location.search).get('sent') === '1') {
  document.getElementById('form-sent').hidden = false;
}

// Put the visitor's name in the email sender and subject
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', () => {
  const name = contactForm.elements.name.value.trim();
  contactForm.elements.subject.value = `Website inquiry from ${name}`;
  contactForm.elements.from_name.value = `${name} via nuevatech.cloud`;
});
