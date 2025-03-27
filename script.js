 // Fonction pour la gestion de l'affichage du footer lorsque l'on fait défiler la page
    document.addEventListener('scroll', function() {
        const footer = document.getElementById('footer');
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= scrollableHeight - 100) { // Ajustez la valeur si nécessaire
            footer.classList.add('visible');
        } else {
            footer.classList.remove('visible');
        }
    });

    // Fonction pour ajouter des effets d'animation aux blocs encadrés lorsqu'ils sont visibles dans la fenêtre
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
        }, observerOptions);

        document.querySelectorAll('.encadre').forEach(encadre => {
            observer.observe(encadre);
        });
    });

    // Contenu des chapitres (mis à jour dynamiquement par JavaScript)
  let currentChapitre = 1;
const totalChapitres = 3; // Nombre total de chapitres

// Fonction pour afficher un chapitre donné
function showChapitre(chapitreNum) {
    // Cacher tous les chapitres
    const chapitres = document.querySelectorAll('.chapitre');
    chapitres.forEach(chapitre => chapitre.classList.remove('active'));

    // Afficher le chapitre demandé
    const chapitreToShow = document.getElementById(`chapitre-${chapitreNum}`);
    chapitreToShow.classList.add('active');

    // Mettre à jour les boutons
    document.getElementById('prevButton').disabled = chapitreNum === 1;
    document.getElementById('nextButton').disabled = chapitreNum === totalChapitres;
}

// Navigation vers le chapitre suivant
document.getElementById('nextButton').addEventListener('click', () => {
    if (currentChapitre < totalChapitres) {
        currentChapitre++;
        showChapitre(currentChapitre);
    }
});

// Navigation vers le chapitre précédent
document.getElementById('prevButton').addEventListener('click', () => {
    if (currentChapitre > 1) {
        currentChapitre--;
        showChapitre(currentChapitre);
    }
});

// Afficher le premier chapitre au départ
showChapitre(currentChapitre);
