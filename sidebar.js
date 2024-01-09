/*
    Web CV Designed by Muhamed Porić.
    This CV is a Portfolio piece in and of itself
    Contact me: contact@muhamedporic.dev
*/

let clickedBtn = true;
let mediaQuery = window.matchMedia("(max-width: 1335px)"); 
document.getElementById('loadCSS').addEventListener('click', function() {
   if (clickedBtn) {
        document.querySelector('.sidebar').style.cssText = 'display: block; position: absolute; top: 0; left: 0; z-index: 3; box-shadow: var(--shadow-section); overflow-y: auto; border-radius: 0;';
        document.querySelector('main').style.cssText = 'filter: blur(10px); opacity: 10%; overflow-y: hidden;'
        if (document.querySelector('#loadCSS').style.top == 0) {
            document.querySelector('#loadCSS').style.top = 0;
        } else if (document.querySelector('#loadCSS').style.top = '45%') {
            document.querySelector('#loadCSS').style.top = 0;

        }
       
        document.querySelector('#direction').src = 'img/back.png'
        document.querySelector('#direction').style.cssText = 'padding-left: 0px; padding-right: 3px;'
    } else {
        if (document.querySelector('#loadCSS').style.top == '45%') {
            document.querySelector('#loadCSS').style.top = 0;
        } else {
            document.querySelector('#loadCSS').style.top = '45%';

        }
        document.querySelector('.sidebar').style.cssText = 'display: none; z-index: 3; box-shadow: var(--shadow-section); overflow-y: auto; border-radius: 15px;';
        mediaQuery.addListener(function(e) {
            if (e.matches) {
              // If media query matches, then do something
              // For example, change the background color of body
   
              document.querySelector('.sidebar').style.cssText = 'display: none; z-index: 3; box-shadow: var(--shadow-section); overflow-y: auto; border-radius: 15px;';
            } else {
              // Else, do something else
              // For example, change the background color of body
              
              document.querySelector('.sidebar').style.cssText = 'display: flex; z-index: 3; box-shadow: var(--shadow-section); overflow-y: auto; border-radius: 15px;';
            }
        });
        
        document.querySelector('main').style.cssText = 'filter: blur(0); opacity: 100%; overflow-y: auto;'
        document.querySelector('.sidebar').style.cssText = 'display: none; z-index: 3; box-shadow: var(--shadow-section); overflow-y: auto; border-radius: 15px;';
        document.querySelector('#direction').src = 'img/forward.png'
        document.querySelector('#direction').style.cssText = 'padding-left: 4px; padding-right: 0px;'
    }
   clickedBtn = !clickedBtn; // Toggle the value of clickedBtn
});