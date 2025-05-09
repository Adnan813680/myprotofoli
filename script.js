function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
function toggleMenu() {
  const nav = document.querySelector('nav ul');
  const menuIcon = document.getElementById('menu-toggle');

  nav.classList.toggle('active');
  menuIcon.classList.toggle('open');
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
    stepButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    stepText.style.opacity = 0;
    
    setTimeout(() => {
      const stepNumber = button.getAttribute('data-step');
      stepText.textContent = stepDescriptions[stepNumber];
      
      stepText.style.opacity = 1;
    }, 300);
  });
});
function toggleForm() {
    const form = document.getElementById('callForm');
    form.style.display = form.style.display === 'flex' ? 'none' : 'flex';
}


