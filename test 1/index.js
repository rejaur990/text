
//console.clear();
//const input = document.querySelector("input[name=name]");
//input.addEventListener('change', changeHandler);


//function changeHandler(e) {
    // console.log("e.type");

    //console.log(e.target);

   // console.log(e.target.className);

   //console.log(e.target.id);
   //console.log(e.target.value);
   

//}

// Get references to the necessary elements
const resultElement = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');
const equalsButton = document.querySelector('.btn-style[style="background-color: blue;"]');

// Add click event listeners to the number and operator buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'c') {
            resultElement.value = '';
        } else if (value === '=') {
            try {
                resultElement.value = eval(resultElement.value);
            } catch (error) {
                resultElement.value = 'Error';
            }
        } else if (value === 'del') {
            resultElement.value = resultElement.value.slice(0, -1);
        } else {
            resultElement.value += value;
        }
    });
});

// Handle key presses
document.addEventListener('keydown', event => {
    const key = event.key;
    const validKeys = '1234567890+-*/.%c=CcDd';

    if (validKeys.includes(key)) {
        event.preventDefault();
        const button = Array.from(buttons).find(btn => btn.value.toLowerCase() === key.toLowerCase());
        if (button) {
            button.click();
        }
    }
});



