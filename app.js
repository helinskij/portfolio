let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');
let aboutme = document.querySelector('#aboutme');
let projects = document.querySelector('#projects');
let experience = document.querySelector('#experience');
let contact = document.querySelector('#contact');


button1.addEventListener('click', function(){
    
    button1.classList.add('navigationactive');
    button2.classList.remove('navigationactive');
    button3.classList.remove('navigationactive');
    button4.classList.remove('navigationactive');
    aboutme.classList.remove('nonactive');
    projects.classList.add('nonactive');
    experience.classList.add('nonactive');
    contact.classList.add('nonactive');
})

button2.addEventListener('click', function(){
    button2.classList.add('navigationactive');
    button1.classList.remove('navigationactive');
    button3.classList.remove('navigationactive');
    button4.classList.remove('navigationactive');
    projects.classList.remove('nonactive');
    aboutme.classList.add('nonactive');
    experience.classList.add('nonactive');
    contact.classList.add('nonactive');
})

button3.addEventListener('click', function(){
   
    button3.classList.add('navigationactive');
    button2.classList.remove('navigationactive');
    button1.classList.remove('navigationactive');
    button4.classList.remove('navigationactive');
    experience.classList.remove('nonactive');
    aboutme.classList.add('nonactive');
    projects.classList.add('nonactive');
    contact.classList.add('nonactive');
})

button4.addEventListener('click', function(){
    
    button4.classList.add('navigationactive');
    button2.classList.remove('navigationactive');
    button3.classList.remove('navigationactive');
    button1.classList.remove('navigationactive');
    contact.classList.remove('nonactive');
    aboutme.classList.add('nonactive');
    experience.classList.add('nonactive');
    projects.classList.add('nonactive');
})