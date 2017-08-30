var readout = document.querySelector('#readout')
    // singular use for var for single item
var digits = document.querySelectorAll('.digit')
    // plural use for var for multiple items
var operators = document.querySelectorAll('.operator')

var equalsBtn = document.querySelector('#equals')

var clearBtn = document.querySelector('#clears')

var firstNumber = null
var secondNumber = null
var operator = null

function evaluate(operation, firstNumber, secondNumber) {
    switch(operation) {
        case '+':
            return firstNumber + secondNumber
        case '-':
            return firstNumber - secondNumber
        case '*':
            return firstNumber * secondNumber
        case '/':
            return firstNumber / secondNumber
    }
}
    //for each digit, do a function...
digits.forEach(function(btn) {
        //add an event listener to each button...
    btn.addEventListener('click', function() {
            // 'this' is the button being clicked...
        console.log(this.innerText)
            // below changes the text to update in readout div to show 'this' button
        readout.innerText += this.innerText
    })
})
    // a separate forEach for the operators
operators.forEach(function(btn) {
    btn.addEventListener('click', function() {

        if (firstNumber) {
            secondNumber = Number(readout.innerText)
            readout.innerText = evaluate(operator, firstNumber, secondNumber)
        }

        console.log(this.innerText)
        firstNumber = Number(readout.innerText)
        operator = this.innerText
        readout.innerText = ''
            // change this to store variables that you will eventually use when you click =
    })
})

    equalsBtn.addEventListener('click', function() {
        console.log(this.innerText)
        secondNumber = Number(readout.innerText)
        readout.innerText = evaluate(operator, firstNumber, secondNumber)
    })

// using evaluate() instead of eval()

// equalsBtn.addEventListener('click', function() {
//     console.log(readout.innerText)
//     readout.innerText = eval(readout.innerText)
// })

// a clear button

clearBtn.addEventListener("click", function(){
    console.log('')
    firstNumber = ''
    secondNumber = ''
    operation = ''
    readout.innerText = ''
  })

// being able to chain operations
