// Query DOM Elements
const path = document.querySelector('.infinity');
const circle = document.querySelector('.circle');

// Create an object that gsap can animate
const val = { distance: 0 };
// Create a tween
gsap.to(val, {
  // Animate from distance 0 to the total distance
  distance: path.getTotalLength(),


  // Loop the animation
  repeat: -1,
  // Make the animation lasts 5 seconds
  duration: 5,
  // Function call on each frame of the animation
  onUpdate: () => {
    // Query a point at the new distance value
    const point = path.getPointAtLength(val.distance);
    // Update the circle coordinates
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
  }
});

/************************************ Animation ************************************/
// A faire : chercher pq ça ne fct pas. 

// Idée : 
// external javascript   https://unpkg.com/gsap@3.11.4/dist/gsap.min.js 

// mots clé : gsap / greensock

// Piste : 
// https://greensock.com/docs/v3/Installation

// Si l'effet que vous souhaitez obtenir consiste simplement à animer un élément le long d'un chemin SVG, 
// comme dans la démo ci-dessus, vous pouvez vérifier le MotionPathPlugin de GreenSock. 
// Il vous permettra d'animer facilement n'importe quel élément DOM à partir d'un chemin que vous fournissez.
// https://greensock.com/motionpath/