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

const colorDisplay = document.getElementById('color-display');
console.log(colorDisplay);

colorDisplay.textContent = 'Coral';
colorDisplay.classList.add('colors');

const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', () => {
    console.log('I am clicking the color button');
    const colorInput = document.getElementById('colorInput');
    colorDisplay.textContent = colorInput.value;
});
console.log(colorBtn);