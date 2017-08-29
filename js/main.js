var readout = document.querySelector('#readout')
// singular use for var for single item
var digits = document.querySelectorAll('.digit')
// plural use for var for multiple items

//for each digit, do a function...
digits.forEach(function(btn){
    //add an event listener to each button...
    btn.addEventListener('click', function() {
        // 'this' is the button being clicked...
        console.log(this.innerText)
        readout.innerText += this.innerText
    })
})

var operators = document.querySelectorAll('.operator')

operators.forEach(function(btn){
    btn.addEventListener('click', function() {
        console.log(this.innerText)
        readout.innerText += this.innerText
    })
})