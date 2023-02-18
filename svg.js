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