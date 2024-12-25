document.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= scrollableHeight - 100) { // Adjust the value as needed
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
        function ouvrirLightbox(image) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = lightbox.querySelector("img");

    lightboxImage.src = image.src; // Utilise la même source que l'image cliquée
    lightbox.style.display = "flex"; // Affiche la lightbox
}

function fermerLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // Masque la lightbox
}

    }, observerOptions);
