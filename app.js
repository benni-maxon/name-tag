// grab DOM elements

// set event listeners
const nameDisplay = document.getElementById('name-display');
console.log(nameDisplay);

//
nameDisplay.textContent = 'Benni';
nameDisplay.classList.add('black');

const updateBtn = document.getElementById('updateBtn');
updateBtn.addEventListener('click', () => {
    console.log('I am clicking the button');
    const nameInput = document.getElementById('nameInput');
    nameDisplay.textContent = nameInput.value;
});