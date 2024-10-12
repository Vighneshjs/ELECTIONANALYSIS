document.addEventListener('DOMContentLoaded', function () {
  // Scroll to top button functionality
  const scrollTopBtn = document.querySelector('.scroll-to-top');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          scrollTopBtn.style.display = 'block';
      } else {
          scrollTopBtn.style.display = 'none';
      }
  });

  scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  // Remove hover effect on dropdown
  const dropdownBtn = document.querySelector('.dropbtn');
  dropdownBtn.addEventListener('click', () => {
      const dropdown = document.querySelector('.dropdown');
      dropdown.classList.toggle('open');
  });

  // Easter egg reveal with smooth appearance
  const easterEggLink = document.querySelector('#easter-egg');
  const hiddenSection = document.querySelector('#hidden-section');
  const closeButton = document.querySelector('.close-button');

// Easter egg reveal with smooth appearance
easterEggLink.addEventListener('click', (event) => {
  event.preventDefault();
  hiddenSection.style.display = 'block';
  hiddenSection.style.opacity = '0';
  hiddenSection.style.transition = 'opacity 0.5s ease'; // Change to 0.5s
  setTimeout(() => {
      hiddenSection.style.opacity = '1';
  }, 10);
});

closeButton.addEventListener('click', () => {
  hiddenSection.style.transition = 'opacity 0.5s ease'; // Change to 0.5s
  hiddenSection.style.opacity = '0';
  setTimeout(() => {
      hiddenSection.style.display = 'none';
  }, 250); // Adjust to match the new transition time
});

  // Hover effect for chart images with smooth animation
  const images = document.querySelectorAll('.chart-container img');
  images.forEach((image) => {
      image.style.transition = 'transform 1s ease, box-shadow 1s ease';
      image.addEventListener('mouseover', () => {
          image.style.transform = 'scale(1.05)';
          image.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
      });
      image.addEventListener('mouseout', () => {
          image.style.transform = 'scale(1)';
          image.style.boxShadow = 'none';
      });
  });

  // Project dropdown link alert
  const projectLinks = document.querySelectorAll('.dropdown-content a');
  projectLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const project = this.dataset.project;
          alert(`To access the project "${project}", you need permission!\nPlease send "Permission for ${project}" to vighneshjs2015@gmail.com.`);
      });
  });

  // Create separate scroll-triggered animations for header elements (name, button, and headings)
  const header = document.querySelector('header h1');
  const headerParagraph = document.querySelector('header p');
  const nameSection = document.querySelector('#name');
  const dropdownButton = document.querySelector('.dropbtn');

  // Set initial opacity and transform for smooth fade-in and slide-up animation
  [header, headerParagraph, nameSection, dropdownButton].forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';  // Initial position for slide-up animation
  });

  // Intersection Observer for scroll-triggered animations
  const observerOptions = {
      threshold: 0.2  // Start the animation when 20% of the element is in view
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
              entry.target.style.transition = 'all 1.5s ease';
              observer.unobserve(entry.target);  // Stop observing once the animation is triggered
          }
      });
  }, observerOptions);

  // Observe each element for separate transitions
  observer.observe(header);
  observer.observe(headerParagraph);
  observer.observe(nameSection);
  observer.observe(dropdownButton);

  // Smooth appearance for other sections on scroll
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(55px)'; // Initial offset for smooth sliding in
      observer.observe(section);
  });
});
