document.addEventListener('DOMContentLoaded', (event) => {

    
    let btnElement = document.querySelector("#my-button")

    
// baggrundsfarveskift på knappen 
    btnElement.addEventListener("click", () => {
        let count = 0;
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