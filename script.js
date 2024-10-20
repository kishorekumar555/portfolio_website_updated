document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: 'smooth'
      });
    });
  });

  // Handle form submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData.entries());
    console.log('Form submitted:', formValues);
    // Here you would typically send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });

  // Update active navigation link on scroll
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    document.querySelectorAll('main section').forEach(section => {
      if (
        section.offsetTop <= scrollPosition + 100 &&
        section.offsetTop + section.offsetHeight > scrollPosition + 100
      ) {
        document.querySelectorAll('nav a').forEach(link => {
          link.removeAttribute('aria-current');
          if (link.getAttribute('href').substring(1) === section.id) {
            link.setAttribute('aria-current', 'page');
          }
        });
      }
    });
  });

  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  function setTheme(theme) {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    localStorage.setItem('theme', theme);
  }

  // Set initial theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (prefersDarkScheme.matches) {
    setTheme('dark');
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    setTheme(currentTheme);
  });
});

console.log('Portfolio website loaded with dark/light mode!');