document.addEventListener('DOMContentLoaded', (event) => {

    
    // baggrundsfarveskift på knappen 
    
let btnElement = document.querySelector("#my-button")
let count = 1;

btnElement.addEventListener("click", () => {
    if (count == 0) {
        btnElement.style.backgroundColor = '#338ab7'
        count = 1;
    }
    else {
            btnElement.style.backgroundColor = '#eee'
            count = 0;

        }        
});

});