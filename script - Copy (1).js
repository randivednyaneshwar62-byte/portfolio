// Initialize ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false
});

// Apply reveal effect to elements with the 'reveal' class
sr.reveal('.reveal', { interval: 150 });