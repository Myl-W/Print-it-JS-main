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

// // Sélection de l'élément bouton par son ID
// var bouton = document.getElementById("monBouton");

// // Ajout de l'event listener pour le clic de souris
// bouton.addEventListener("click", function() {
//     // Code à exécuter lorsque le bouton est cliqué
//     console.log("Le bouton a été cliqué !");
// });


// function createCarrousel(position){
// 	const banner = document.querySelector("banner")

// 		const element = slides[position];
// 		//console.log(élément);
// 		const img =document.createElement(img);
// 		img.setAttribute("class", "banner-img");
// 		img.setAttribute("src", "/assets/images/slideshow/"+ element.image);
// 		img.setAttribute("alt", "banner Print-it");
// 		const p = document.createElement(p);
// 		p.innerhtml= element.tagLine;

// 		banner.append(p);

new Carousel (document.querySelector)