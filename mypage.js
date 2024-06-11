document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a');
  const skillButton = document.getElementById('view-skill-portfolio');
  const projectButton = document.getElementById('view-project-portfolio');
  const skillModal = document.getElementById('skill-modal');
  const projectModal = document.getElementById('project-modal');
  const skillCloseButton = document.querySelector('.skill-close-button');
  const projectCloseButton = document.querySelector('.project-close-button');

  navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                  behavior: 'smooth'
              });
          }
      });
  });

  skillButton.addEventListener('click', function () {
      skillModal.style.display = 'flex';
  });

  projectButton.addEventListener('click', function () {
      projectModal.style.display = 'flex';
  });

  skillCloseButton.addEventListener('click', function () {
      skillModal.style.display = 'none';
  });

  projectCloseButton.addEventListener('click', function () {
      projectModal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
      if (event.target === skillModal) {
          skillModal.style.display = 'none';
      }
      if (event.target === projectModal) {
          projectModal.style.display = 'none';
      }
  });
});
