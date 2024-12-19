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
    }, observerOptions);

    // Les données des chapitres
const chapitres = [
    {
        titre: "Titre du Chapitre 1",
        sousTitre: "Sous-titre du Chapitre 1",
        contenu: "Voici le contenu du premier chapitre. Ce texte sera remplacé par le contenu du chapitre suivant lorsque vous cliquerez sur le bouton."
    },
    {
        titre: "Titre du Chapitre 2",
        sousTitre: "Sous-titre du Chapitre 2",
        contenu: "Voici le contenu du deuxième chapitre. Continuez à cliquer pour découvrir le reste de l'histoire."
    },
    {
        titre: "Titre du Chapitre 3",
        sousTitre: "Sous-titre du Chapitre 3",
        contenu: "Voici le contenu du troisième chapitre. C'est la fin de l'histoire, merci d'avoir lu !"
    }
];

let chapitreActuel = 0;

// Fonction pour mettre à jour le contenu
function mettreAJourChapitre() {
    document.getElementById("titre").innerText = chapitres[chapitreActuel].titre;
    document.getElementById("sous-titre").innerText = chapitres[chapitreActuel].sousTitre;
    document.getElementById("contenu").innerText = chapitres[chapitreActuel].contenu;
}

// Aller au chapitre précédent
function precedentChapitre() {
    if (chapitreActuel > 0) {
        chapitreActuel--;
        mettreAJourChapitre();
    }
}

// Aller au chapitre suivant
function suivantChapitre() {
    if (chapitreActuel < chapitres.length - 1) {
        chapitreActuel++;
        mettreAJourChapitre();
    }
}

// Initialisation du contenu
mettreAJourChapitre();

    document.querySelectorAll('.encadre').forEach(encadre => {
        observer.observe(encadre);
    });
});
