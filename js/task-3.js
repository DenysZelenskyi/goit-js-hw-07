let inputElement = document.querySelector('#name-input');
let outputElement = document.querySelector('#name-output');

inputElement.addEventListener('input', function() {
    let inputValue = inputElement.value.trim(); 

    outputElement.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
