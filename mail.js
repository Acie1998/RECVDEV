/*
    Web CV Designed by Muhamed Porić.
    This CV is a Portfolio piece in and of itself
    Contact me: contact@muhamedporic.dev
*/

emailjs.init('oaNmrX8jaDQ5lfilw');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#msg');
const statusText = document.querySelector('#status-text');
const btn = document.querySelector('#submit');

document.querySelector('#contactform').addEventListener('submit', e => {
    e.preventDefault();
    btn.style.cssText = 'filter: brightness(150%); color: var(--font-v2);';
    statusText.innerHTML = 'Your message is being sent...';
    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };
    const serviceID = 'service_pxna4lq';
    const templateID = 'template_g5r1q7n';

    emailjs.send(serviceID, templateID, inputFields)
        .then(() => {
            btn.value = 'Success';
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
            statusText.style.color = "var(--font-v1)";
            statusText.innerHTML = "Message sent successfuly!"
        
        }, (err) => {
            btn.value = 'Failure';
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
            statusText.style.color = "var(--font-failure)";
            statusText.innerHTML = "Message was not sent! Contact me via email: contact@muhamedporic.dev"
        });
});
