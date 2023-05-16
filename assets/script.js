const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des flèches de navigation gauche et droite
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Sélection des éléments d'image et de ligne de texte
const imageElement = document.querySelector('.banner-img');
const tagLineElement = document.querySelector('.banner-tagline');

// Sélection de tous les points (bullet points)
const dots = document.querySelectorAll('.dot');

// Sélection du conteneur des diapositives
const slidesContainer = document.querySelector('.slides-container');

// Variable pour suivre la diapositive actuelle
let currentSlide = 0;

// Ajout des écouteurs d'événement pour les clics sur les flèches gauche et droite
arrowLeft.addEventListener('click', navigateSlide);
arrowRight.addEventListener('click', navigateSlide);

// Ajout des écouteurs d'événement pour les clics sur les points (bullet points)
dots.forEach((dot, index) => dot.addEventListener('click', () => navigateSlide(index)));

// Fonction pour naviguer vers une diapositive spécifique ou à la suivante/précédente
function navigateSlide(index) {
	// Si un index est passé en paramètre, on met à jour la diapositive actuelle
	if (index !== undefined) {
		currentSlide = index;
	} else {
		// Sinon, on détermine la diapositive suivante ou précédente en fonction de la flèche cliquée
		currentSlide = (currentSlide + (this === arrowLeft ? slides.length - 1 : 1)) % slides.length;
	}
	// Mise à jour de l'affichage de la diapositive
	updateSlide();
}

// Fonction pour mettre à jour l'affichage de la diapositive
function updateSlide() {
	// Suppression de la classe 'active' de tous les points
	dots.forEach(dot => dot.classList.remove('active'));

	// Ajout de la classe 'active' au point correspondant à la diapositive actuelle
	dots[currentSlide].classList.add('active');

	// Mise à jour de l'image et du texte correspondant à la diapositive actuelle
	imageElement.src = slides[currentSlide].image;
	tagLineElement.innerHTML = slides[currentSlide].tagLine;
}

// Mise à jour de l'affichage initial de la diapositive
updateSlide();
