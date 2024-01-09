/*
    Web CV Designed by Muhamed Porić.
    This CV is a Portfolio piece in and of itself
    Contact me: contact@muhamedporic.dev
*/

document.addEventListener("DOMContentLoaded", function() {
  // Get all progress blocks by class
  var progressBlocks = document.querySelectorAll('.progress-block');
  
  progressBlocks.forEach(function(block, index) {
  // Get the progress bar and its corresponding span element
  var progressBar = block.querySelector('.progress');
  var progressValueSpan = block.querySelector('.right');
 
  // Get the value attribute for the progress bar
  var progressValue = progressBar.getAttribute('value');
 
  // Create a new style declaration
  var newStyle = document.createElement('style');
  
  // Insert the new style declaration into the head of the document
  document.head.appendChild(newStyle);
  
  // Access the stylesheet object from the style element
  var styleSheet = newStyle.sheet;
  
  // Define the keyframes for the animation
  var keyframesName = `growWidth${index}`;
  var keyframes = `@keyframes ${keyframesName}{from{width:0;}to{width:${progressValue+'%'};}}`;
  
  // Insert the keyframes into the stylesheet
  styleSheet.insertRule(keyframes, 0);
  
  // Apply the animation to the ::after pseudo-element of the progress bar
  styleSheet.insertRule(`#${block.id} .progress::after { animation: ${keyframesName} 2s ease-out forwards; }`, 1);
 
  // Update the innerHTML of the span element with the progress value
  var counter = 0;

 // Create a function to increment the counter
  function incrementCounter() {
 if (counter < progressValue) {
 counter++;
 progressValueSpan.innerHTML = counter + '%';
 var maxValue = 100; // Maximum possible value
 var delay = Math.max(Math.pow(maxValue, 1/4) / (counter * 2), 10); // Calculate the delay based on the counter value
 setTimeout(incrementCounter, delay); // Increment every delay ms
 }
 }

 // Call the function to start the counter
 incrementCounter();
  });
 });

 let textIndex = 0;
 const texts = ['I am a Project Manager. </code>', 'I am a Scrum Master. </code>', 'I am a Front-End Developer. </code>'];
 
 document.getElementById('typing').innerText = '';
 
 function typeWriter() {
  if (textIndex < texts.length) {
  if (textIndex !== 0) {
    document.getElementById('typing').innerText = '';
  }
  
  let i = 0;
  const intervalId = setInterval(() => {
    if (i < texts[textIndex].length) {
      document.getElementById('typing').innerText += texts[textIndex][i];
      i++;
    } else {
      clearInterval(intervalId);
      setTimeout(deleteText, 2000);
    }
  }, 100);
  }
 }
 
 function deleteText() {
  let i = 0;
  const intervalId = setInterval(() => {
  if (i > 0) {
    document.getElementById('typing').innerText = texts[textIndex].slice(0, -i);
    i++;
  } else {
    clearInterval(intervalId);
    if (textIndex === texts.length - 1) {
      document.getElementById('typing').innerText = '';
    }
    textIndex = (textIndex + 1) % texts.length;
    typeWriter();
  }
  }, 100);
 }
 
 typeWriter();
 
 
 
 
