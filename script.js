// Full Page Scroll with Snap
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.height = '100vh';
    section.style.scrollSnapAlign = 'start';
  });

  document.body.style.scrollSnapType = 'y mandatory';
  document.body.style.overflowY = 'scroll';
  document.body.style.overflowX = 'hidden';
});

function toggleMenu() {
  const nav = document.querySelector('nav ul');
  const menuIcon = document.getElementById('menu-toggle');
  const closeIcon = document.getElementById('menu-close');

  nav.classList.toggle('active');
  menuIcon.classList.toggle('open');
  closeIcon.classList.toggle('open');
}

// Toggle Form Modal
function toggleForm(event) {
  event.preventDefault();
  document.getElementById('formOverlay').style.display = 'flex';
}

function closeForm() {
  document.getElementById('formOverlay').style.display = 'none';
}

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const icon = document.getElementById("icon");
  if (document.body.classList.contains("dark-mode")) {
    icon.textContent = "🌞";
  } else {
    icon.textContent = "🌙";
  }
}

// "How I Work" Stepper
const stepText = document.getElementById('step-text');
const stepButtons = document.querySelectorAll('.step-btn');

const steps = {
  1: "Understanding the client’s needs and goals thoroughly.",
  2: "Planning and designing based on best UX/UI practices.",
  3: "Implementing and coding the project efficiently.",
  4: "Testing, iterating, and delivering with quality assurance."
};

stepButtons.forEach(button => {
  button.addEventListener('click', () => {
    const step = button.dataset.step;
    stepText.textContent = steps[step];

    stepButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
