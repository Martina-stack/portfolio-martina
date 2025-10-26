document.querySelector('.review-tool').addEventListener('click', () => {
    alert('AI Review Tool clicked!');
});

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('.section').forEach(section => section.classList.toggle('dark-mode'));
    document.querySelectorAll('.job').forEach(job => job.classList.toggle('dark-mode'));
    document.querySelectorAll('.education-card').forEach(card => card.classList.toggle('dark-mode'));
    document.querySelectorAll('.project-card').forEach(card => card.classList.toggle('dark-mode'));
    document.querySelectorAll('.languages div').forEach(div => div.classList.toggle('dark-mode'));
    document.querySelectorAll('nav ul li a').forEach(a => a.classList.toggle('dark-mode'));
    document.querySelector('.profile').classList.toggle('dark-mode');
    document.querySelector('.profile h1').classList.toggle('dark-mode');
    document.querySelector('.profile p').classList.toggle('dark-mode');
    document.querySelectorAll('.social-links a').forEach(a => a.classList.toggle('dark-mode'));
    themeToggle.classList.toggle('dark-mode');
});