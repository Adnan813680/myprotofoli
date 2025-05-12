window.onload = function () {
  const darkModeEnabled = localStorage.getItem('dark-mode') === 'enabled';
  if (darkModeEnabled) {
    document.body.classList.add('dark-mode');
    document.getElementById('icon').textContent = '🌞';
  }
};

function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById('icon');

  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');

  icon.textContent = isDark ? '🌞' : '🌙';
  localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
}
function toggleMenu() {
  const nav = document.querySelector('nav ul');
  const menuIcon = document.getElementById('menu-toggle');
  nav.classList.toggle('active');
  menuIcon.classList.toggle('open'); // Toggle X effect
}

console.log("Playlist card loaded successfully!");
const stepButtons = document.querySelectorAll('.step-btn');
const stepText = document.getElementById('step-text');

const stepDescriptions = {
  1: "Understanding the client’s needs and goals thoroughly.",
  2: "Designing a user-centric and innovative solution.",
  3: "Developing prototypes and iterating with feedback.",
  4: "Delivering a polished, high-quality final product.",
};

stepButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all
    stepButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Fade out
    stepText.style.opacity = 0;
    
    // Change text after fade out
    setTimeout(() => {
      const stepNumber = button.getAttribute('data-step');
      stepText.textContent = stepDescriptions[stepNumber];
      
      // Fade in
      stepText.style.opacity = 1;
    }, 300); // 300ms fade
  });
});
function toggleForm() {
    const form = document.getElementById('callForm');
    form.style.display = form.style.display === 'flex' ? 'none' : 'flex';
}


