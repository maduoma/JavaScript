'use strict'; //It ensures that variables are declared e.g let name; not name

//Declare a function showMessage(greetings)
function showMessage(greetings){
    document.getElementById('greetings').textContent = greetings;
}

function demoFun(){
     const myHello = document.getElementById('myP').textContent = 'greetings';
     myHello.style.color = 'blue';
    document.getElementsByTagName('p').textContent = 'tag name';
    document.getElementsByName('p').textContent = 'by name';
    //const myHello = document.getElementsByClassName('myHello');
    //myHello.style.color = 'red';
    //document.getElementsByTagNameNS
}