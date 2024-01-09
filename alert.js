/*
    Web CV Designed by Muhamed Porić.
    This CV is a Portfolio piece in and of itself
    Contact me: contact@muhamedporic.dev
*/

let modal = document.getElementById("modal");
let span = document.getElementsByClassName("close")[0];
   
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {

    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}