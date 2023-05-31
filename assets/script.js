
document.addEventListener("DOMContentLoaded", function() {
	// Définition des diapositives du carrousel
	const slides = [
	  {
		image: "./assets/images/slideshow/slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	  },
	  {
		image: "./assets/images/slideshow/slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	  },
	  {
		image: "./assets/images/slideshow/slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	  },
	  {
		image: "./assets/images/slideshow/slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	  },
	];
  
	// Variable pour suivre l'index de la diapositive actuelle
	let currentSlide = 0;
  
	// Sélection des éléments de la bannière et des points du carrousel
	const bannerImgElement = document.querySelector(".banner-img");
	const bannerTextElement = document.querySelector("#banner > p");
	const dots = document.querySelectorAll(".dot");
	const arrowLeft = document.querySelector(".arrow_left");
	const arrowRight = document.querySelector(".arrow_right");
  
	// Fonction pour mettre à jour l'affichage de la diapositive actuelle
	function updateSlide() {
	  // Récupération de la diapositive correspondante à l'index actuel
	  const slide = slides[currentSlide];
  
	  // Mise à jour de l'image et de la légende de la bannière
	  bannerImgElement.src = slide.image;
	  bannerTextElement.innerHTML = slide.tagLine;
  
	  
	  // Mise à jour de la classe CSS des points du carrousel
	  dots.forEach((dot, i) => {
		// Supprime la classe "dot_selected" de tous les points
		dot.classList.toggle("dot_selected", i === currentSlide);
		// Ajoute la classe "dot_selected" uniquement au point correspondant à la diapositive actuelle
		dots[currentSlide].classList.add("dot_selected");
	  });

	  // Sélection de la div contenant les points du carrousel
	  const dotsContainer = document.querySelector('.dots');
	  dotsContainer.innerHTML = '';
	  for (let i =0; i < slides.length; i++) {
		const dot = document.createElement('span');
		dot.classList.add('dot')
		dot.setAttribute ('data-id',i);
		dotsContainer.appendChild(dot);
	  }
	}

	const arrows = document.querySelectorAll(".arrow")
	for (const arrow of arrows) {
		arrow.addEventListener("click", (e) => {
			// Gestionnaire d'événement pour le clic chaque flèche
			const arrowBtn = e.target
			const side = arrowBtn.dataset.side
			if(side == "left"){
				// Passage à la diapositive précédente en utilisant l'opérateur de modulo pour boucler
				currentSlide = (currentSlide - 1 + slides.length) % slides.length;
			} else {
				currentSlide = (currentSlide + 1) % slides.length;
			}
			// Mise à jour de l'affichage de la diapositive
			updateSlide()
		})
	}
  
	// Affichage de la première diapositive lors du chargement de la page
	updateSlide();
  });
  
  