let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');

button1.addEventListener('click', function(){
    button1.classList.add('navigationactive');
    button2.classList.remove('navigationactive');
    button3.classList.remove('navigationactive');
    button4.classList.remove('navigationactive');
})
button2.addEventListener('click', function(){
    button2.classList.add('navigationactive');
    button1.classList.remove('navigationactive');
    button3.classList.remove('navigationactive');
    button4.classList.remove('navigationactive');
})
button3.addEventListener('click', function(){
    button3.classList.add('navigationactive');
    button2.classList.remove('navigationactive');
    button1.classList.remove('navigationactive');
    button4.classList.remove('navigationactive');
})
button4.addEventListener('click', function(){
    button4.classList.add('navigationactive');
    button2.classList.remove('navigationactive');
    button3.classList.remove('navigationactive');
    button1.classList.remove('navigationactive');
})