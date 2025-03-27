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

    document.querySelectorAll('.encadre').forEach(encadre => {
        observer.observe(encadre);
    });

    <script>
    const chapitres = [
        {
            titre: "Chapitre 1: Mois 19",
            sousTitre: "Sous-titre du Chapitre 1",
            contenu: "Les aubergines assaillent les côtes nordiques, grâce aux bois volés à la Russie, ainsi, elles attaquèrent alors la Norvège pour passer dans la Finlande. Elles veulent saccager la Pologne, cependant, les peuples patates se sacrifient pour les ralentir. Ainsi, Patake arriva et détruisit peu à peu l’armée adverse. En deux jours, il détruisit l’armée des aubergines et annhila plus de 190 000 aubergines aisément. ..."
        },
        {
            titre: "Chapitre 2: Mois 20a",
            sousTitre: "Sous-titre du Chapitre 2",
            contenu: "Un rapport arriva parmi les rapports des guerres civiles, cette information avait été peu médiatisée parmi les chefs militaires; le voici : Une religion païenne s’est déclarée sur nos terres, celle des poissons. De plus, certaines religions céréalières se déclarent dans les îles d’Amérique latine. Mais les poissons eux sont nombreux et surpuissants, certains requins ont peur… Aidez-nous, ils prennent une ampleur surréaliste."
        },
        {
            titre: "Chapitre 3: Mois 20b",
            sousTitre: "Sous-titre du Chapitre 3",
            contenu: "Voici quelques missives entre le port d’Islande avec leur roi à celui du Canada ou plutôt de son prince. Les voici : 11 Août - Canada: Nous avons enquêté, les poissons sont bien une religion de l’envergure des aubergines, cependant, ils se mélangent à l’élite et sont bien vus en Amérique latine et aux Etats-Unis. Mon cher pays se fait lui aussi corrompre petit à petit, ce que je sais c’est qu’ils cachent quelque chose."
        },
        // Ajoutez les autres chapitres ici
    ];

    let chapitreActuel = 0;

    function afficherChapitre() {
        const chapitre = chapitres[chapitreActuel];
        document.getElementById("titre").textContent = chapitre.titre;
        document.getElementById("sous-titre").textContent = chapitre.sousTitre;
        document.getElementById("contenu").textContent = chapitre.contenu;
    }

    function precedentChapitre() {
        if (chapitreActuel > 0) {
            chapitreActuel--;
            afficherChapitre();
        }
    }

    function suivantChapitre() {
        if (chapitreActuel < chapitres.length - 1) {
            chapitreActuel++;
            afficherChapitre();
        }
    }

    // Initialiser le premier chapitre
    afficherChapitre();
</script>
});
