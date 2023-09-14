
let currentPlayer = 'X';
const test =document.querySelectorAll('.cell');

const board = [
    ["", "", ""], 
    ["", "", ""],
    ["", "", ""] 
]; 



test[0].addEventListener('click',function(){
    if (board[0][0] === '') {
      test[0].textContent = currentPlayer  
    } 
})

test[1].addEventListener('click',function(){
    if (board[0][1] === '') {
    //   test[1].textContent = currentPlayer  
    test[1].textContent = "O"
    
     } 
})
test[2].addEventListener('click',function(){
    if (board[0][2] === '') {
    //   test[1].textContent = currentPlayer  
    test[2].textContent = "O"
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
})

test[3].addEventListener('click',function(){
    if (board[1][0] === '') {
    //   test[1].textContent = currentPlayer  
    test[3].textContent = "O"
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
})

test[4].addEventListener('click',function(){
    if (board[1][1] === '') {
    //   test[1].textContent = currentPlayer  
    test[4].textContent = "O"
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
})

test[5].addEventListener('click',function(){
    if (board[1][2] === '') {
    //   test[1].textContent = currentPlayer  
    test[5].textContent = "O"
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
})

test[6].addEventListener('click',function(){
    if (board[2][0] === '') {
    //   test[1].textContent = currentPlayer  
    test[6].textContent = "O"
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
})

test[7].addEventListener('click',function(){
    if (board[2][1] === '') {
    //   test[1].textContent = currentPlayer  
    test[7].textContent = "O"
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
})

test[8].addEventListener('click',function(){
    if (board[2][2] === '') {
    //   test[1].textContent = currentPlayer  
    test[8].textContent = "O"
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
})
// test[1].addEventListener('click',function(){
//     test[1].textContent = currentPlayer = currentPlayer === 'X' ? 'O': "X"
// })