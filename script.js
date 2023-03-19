const inputUser = document.querySelector('.inputUser');
const operations = document.querySelectorAll('.operation');
const numbers = document.querySelectorAll('.number');
const cleanScreen = document.querySelector('.cleanScreen');
const equal = document.querySelector('.equal');
const moreLessButton = document.querySelector('.moreLess');
const porcentageButton = document.querySelector('.porcentage');
let number1 = 0;
let number2 = 0;
let operation = "";


Array.from(numbers).map(number =>{
    number.addEventListener('click', (e) => {
        inputUser.value += number.value;
    })
})

cleanScreen.addEventListener('click', (e) => {
    inputUser.value = "";
    number1 = 0;
    number2 = 0;
})

Array.from(operations).map((element) => {
    element.addEventListener('click', (e) => {
        operation = element.value;
        number1 = parseFloat(inputUser.value);
        inputUser.value = "";
    })
})

moreLessButton.addEventListener('click', (e) => {
    inputUser.value = moreLess(inputUser.value);
})

porcentageButton.addEventListener('click', (e) => {
    inputUser.value = porcentage(inputUser.value);
})

equal.addEventListener('click', (e) => {
    number2 = parseFloat(inputUser.value);

    switch (operation) {
        case 'sum':
            inputUser.value = sum(number1, number2);
            break;
        case 'rest':
            inputUser.value = rest(number1, number2);
            break;
        case 'div':
            if(number1 !== 0 && number2 !== 0){
                inputUser.value = div(number1, number2);
            }else{
                alert("The division between 0 is not posible");
                inputUser.value = "";
                number1 = 0;
                number2 = 0;
            }
            break;
        case 'mult':
            inputUser.value = mult(number1, number2);
            break;
        default:
            break;
    }
})


function sum(num1, num2){
    return num1 + num2
}

function rest(num1, num2) {
    return num1 - num2;
}

function div(num1, num2){
    return (num1 / num2).toFixed(2);
}

function mult(num1, num2){
    return num1 * num2;
}

function moreLess(num) { 
       return num < 0 ? num : -num;
}

function porcentage(num){
    return num / 100;
}