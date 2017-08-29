var readout = document.querySelector('#readout')
// singular use for var for single item
var digits = document.querySelectorAll('.digit')
// plural use for var for multiple items
var operators = document.querySelectorAll('.operator')

var equalsBtn = document.querySelector('#equals')

//for each digit, do a function...
digits.forEach(function(btn){
    //add an event listener to each button...
    btn.addEventListener('click', function() {
        // 'this' is the button being clicked...
        console.log(this.innerText)
        // below changes the text to update in readout div to show 'this' button
        readout.innerText += this.innerText
    })
})

operators.forEach(function(btn){
    btn.addEventListener('click', function() {
        console.log(this.innerText)
        readout.innerText += this.innerText
    })
})

// equalsBtn.addEventListener('click', function() {
//     console.log(readout.innerText)
//     readout.innerText = eval(readout.innerText)
// })

var equalsBtn = [digits, operators];
    equalsBtn.forEach(function(btn)) {

    btn.addEventListener('click', function() {
    for(var i = 0; i < equalsBtn.length; i++){
    console.log(this[equalsBtn[i]].innerText);
    readout.innerText += this.innerText
    }
})
}
