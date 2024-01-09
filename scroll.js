/*
    Web CV Designed by Muhamed Porić.
    This CV is a Portfolio piece in and of itself
    Contact me: contact@muhamedporic.dev
*/

// Select all the elements you want to animate
let elements = document.querySelectorAll('.progress11');

// Options for the Intersection Observer
let options = {
 root: null, // relative to document viewport 
 rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
 threshold: 0.1 // visible amount of item shown in relation to root
};

// Callback function for the Intersection Observer
let callback = (entries, observer) => { 
 entries.forEach((entry) => {
   // If the element is in the viewport, add the animation class
   if(entry.isIntersecting){
     entry.target.classList.add('growWidth');
     entry.target.classList.add('countUp');
   } else {
     // If the element is not in the viewport, remove the animation class
     entry.target.classList.remove('growWidth');
     entry.target.classList.remove('countUp');
   }
 })
};

// Create the Intersection Observer and pass in the callback
let observer = new IntersectionObserver(callback, options);

// Attach the Intersection Observer to each element
elements.forEach(element => {
 observer.observe(element);
});
