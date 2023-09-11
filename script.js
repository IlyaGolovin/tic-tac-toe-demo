const board = [
    ["", "", ""], 
    ["", "", ""],
    ["", "", ""] 
]; 


const test =document.querySelectorAll('.cell');
test[0].addEventListener('click',function(){
    test[0].textContent = "X"
})