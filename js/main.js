// This line creates a new Date object representing the current date and time.
const date = new Date();
// This line selects all elements with the class name ("date") and stores them in the today variable as a NodeList.
const today = document.querySelectorAll('.date');
// This line iterates over each element in the today NodeList using the forEach method.
// Next line formats the date based on the location of the user.
today.forEach(element => {
    element.textContent = date.toLocaleDateString();
});
// This line selects all elements with class name ("accord-modal"). 
const accordion = document.querySelectorAll('.accord-modal');
/* 
This line iterates over each element in the accordion NodeList using the forEach method.
Within the event listener function, event.target refers to the specific element that was clicked.
parentElement is then used to access the parent element of the clicked element, and nextElementSibling
is used to get the next sibling element of the parent.
*/
accordion.forEach(el => {
    el.addEventListener('click', (event) => {
        const item = event.target.parentElement.nextElementSibling;
        if (item.style.display === 'block') {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    })
});
