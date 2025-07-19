// Tab switching
document.querySelectorAll('.sidebar nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    
    // Update active tab
    document.querySelectorAll('.sidebar nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
    
    // Show target section
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(targetId).classList.add('active');
  });
});

// Highlight first tab by default
document.querySelector('.sidebar nav a').click();