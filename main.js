let addCount =  document.querySelector('#btn-increment');
let reduceCount = document.querySelector('#btn-decrement');
let countDisplay = document.querySelector('.counter_display');


let count = 0;
updateDisplay();

addCount.addEventListener('click', function() {
    if(count >= 50){
         count = 50
    } else {
        count++;
    updateDisplay();
    }
});

// reduce counter 
reduceCount.addEventListener('click', function () {
    if(count <= 0 ){
        count = 0
    } else{
        count--;
        updateDisplay();
    }
})

// counter display
function updateDisplay(){
    countDisplay.innerHTML = count
}


