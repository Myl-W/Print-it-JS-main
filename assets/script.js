const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des flèches de navigation
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Event listener pour la flèche gauche
arrowLeft.addEventListener('click', () => {
  // Code à exécuter lors du clic sur la flèche gauche
  // Par exemple, naviguer vers la diapositive précédente du carrousel
  console.log("Clic sur la flèche gauche");
});

// Event listener pour la flèche droite
arrowRight.addEventListener('click', () => {
  // Code à exécuter lors du clic sur la flèche droite
  // Par exemple, naviguer vers la diapositive suivante du carrousel
  console.log("Clic sur la flèche droite");
});