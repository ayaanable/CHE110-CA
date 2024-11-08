document.addEventListener('DOMContentLoaded', function() {
    const facts = [
        "About 71% of the Earth's surface is water-covered.",
        "Over 1.2 billion people lack access to clean drinking water.",
        "Water scarcity affects more than 40% of the global population.",
        "Agriculture accounts for 70% of global water usage.",
        "Unsafe water and poor sanitation cause 1.5 million deaths per year, mostly among children under five.",
        "Many of the world's major rivers, including the Colorado, Yellow, Ganges, and Indus, are drying up due to over-extraction and pollution.",
        "By 2025, two-thirds of the world's population may face water shortages."
    ];

    const factButton = document.getElementById('factButton');
    const factDisplay = document.getElementById('factDisplay');

    factButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.textContent = facts[randomIndex];
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Collapsible Sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const h2 = section.querySelector('h2');
        h2.addEventListener('click', () => {
            const content = h2.nextElementSibling;
            content.classList.toggle('hidden');
            h2.classList.toggle('collapsed');
        });
    });
    
    
    // Back to Top Button
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = 'Top';
    backToTopButton.id = 'backToTop';
    backToTopButton.style.display = 'none';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
