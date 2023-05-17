const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Définition de la variable currentSlide avec une valeur initiale de 0 (diapositive par défaut)
let currentSlide = 0;

// Définition de la fonction setSlide avec un argument slideNum
function setSlide(slideNum) {

	// Attribution de la valeur de slideNum à la variable currentSlide
	currentSlide = slideNum;

	// Sélection de l'élément de la bannière d'image avec la classe "banner-img"
	const bannerImgElement = document.querySelector(".banner-img");

	// Vérification si l'objet slide existe et contient la propriété 'image'
	if (slides[slideNum].hasOwnProperty("image")) {
		// Modification de la source de l'image de la bannière avec la valeur de l'image correspondant à la diapositive actuelle
		bannerImgElement.src = slides[slideNum].image; // bannerImgElement.src = slides[slideNum]["image"] 
	}; 

	// Sélection de l'élément de texte de la bannière avec l'ID "banner" suivi de la balise <p>
	const bannerTextElement = document.querySelector("#banner > p");

	// Vérification si l'objet slide existe et contient la propriété 'tagLine'
	if (slides[slideNum].hasOwnProperty("tagLine")) {
		// Modification du contenu HTML de l'élément de texte de la bannière avec la valeur de la légende correspondant à la diapositive actuelle
		bannerTextElement.innerHTML = slides[slideNum].tagLine;
	}

	// Sélection de tous les éléments avec la classe CSS ".dot" correspondant aux points du carrousel
	const dots = document.querySelectorAll(".dot");

	// Parcours de chaque point du carrousel à l'aide d'une boucle forEach, en fournissant à chaque itération l'élément du point et son index
	dots.forEach((dot, index) => {

		// Vérification si l'index du point correspond à la diapositive actuelle (slideNum)
		if (index === slideNum) {

		// Ajout de la classe CSS "dot_selected" au point pour le mettre en surbrillance
		dot.classList.add("dot_selected");
		} 

		else {
		// Suppression de la classe CSS "dot_selected" du point pour le désélectionner
		dot.classList.remove("dot_selected");
		}

	});
}

// Définition de la fonction clickArrowRight qui sera appelée lorsqu'une flèche droite est cliquée
function clickArrowRight() {
	// Appel de la fonction setSlide avec l'argument correspondant à la diapositive suivante (utilisation de l'opérateur de modulo pour boucler entre les diapositives)
	setSlide((currentSlide + 1) % slides.length);
	// Affichage d'un message dans la console pour indiquer que la flèche droite a été cliquée
	console.log("clickArrowRight");
}

// Définition de la fonction clickArrowLeft qui sera appelée lorsqu'une flèche gauche est cliquée
function clickArrowLeft() {
	// Appel de la fonction setSlide avec l'argument correspondant à la diapositive précédente (utilisation de l'opérateur de modulo pour boucler entre les diapositives)
	setSlide((currentSlide - 1 + slides.length) % slides.length);
	// Affichage d'un message dans la console pour indiquer que la flèche gauche a été cliquée
	console.log("clickArrowLeft");
}

// Ajout d'un Event Listener flèche droite
const arrowRightElement = document.querySelector(".arrow_right");
arrowRightElement.addEventListener("click", clickArrowRight);

// Ajout d'un Event Listener flèche gauche
const arrowLeftElement = document.querySelector(".arrow_left");
arrowLeftElement.addEventListener("click", clickArrowLeft);
