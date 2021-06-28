// Your code goes here

//mouseover

const navAnimation = document.querySelector('.nav');

navAnimation.addEventListener('mouseover', function(e){
    e.target.style.color = 'orange';
    setTimeout(function(){
        e.target.style.color = '';
    }, 300);
});

//keydown

const text = document.querySelector('.intro h2');

window.addEventListener('keydown', function(){
    if(text.style.color != 'pink'){
        text.style.color = 'pink';
    }else{
        text.style.color = '';
    }
});

//wheel

const img = document.querySelectorAll('img');

const imgArray = Array.from(img);

window.addEventListener('wheel', function(){
    if(this.pageYOffset > 50){
        imgArray[0].style.width = '85%';
        imgArray[1].style.width = '85%';
        imgArray[2].style.width = '85%';
        imgArray[3].style.width = '85%';
    }else if(this.pageYOffset === 0){
        imgArray[0].style.width = '';
        imgArray[1].style.width = '';
        imgArray[2].style.width = '';
        imgArray[3].style.width = '';
    }
});

//load 

// window.addEventListener('load', () => alert(`You're about to enter my website.`));

//focus 😔 Study more 😔

const button = document.querySelectorAll('.btn');

button[0].addEventListener('focus', function(){
    if(button[0].style.backgroundColor === ''){
        button[0].style.backgroundColor = 'purple';
    }else if(button[0].style.backgroundColor === 'purple'){
        button[0].style.backgroundColor = '';
    }else{
        return;
    }
});

button[1].addEventListener('focus', function(){
    if(button[1].style.backgroundColor === ''){
        button[1].style.backgroundColor = 'purple';
    }else if(button[1].style.backgroundColor === 'purple'){
        button[1].style.backgroundColor = '';
    }else{
        return;
    }
});

button[2].addEventListener('focus', function(){
    if(button[2].style.backgroundColor === ''){
        button[2].style.backgroundColor = 'purple';
    }else if(button[2].style.backgroundColor === 'purple'){
        button[2].style.backgroundColor = '';
    }else{
        return;
    }
});

//resize

// const body = document.querySelector('body');

// window.addEventListener('resize', () => body.style.backgroundColor = '#4f4f4f');

//scroll

const logo = document.querySelector('.logo-heading');

window.addEventListener('scroll', function(){
    logo.style.color = `red`;
});

//select

// function logSelection(event) {
//     const log = document.querySelector('.intro p');
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     log.textContent = `You selected: ${selection}`;
// }

function random(event){
    // const log = document.querySelector('.intro p');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    return selection;
}

document.onselect = console.log(random);


// window.addEventListener('select', logSelection);

//e.target.style.fontWeight = 'bold'

//dblclick

window.addEventListener('dblclick', (event) =>  event.target.style.filter = `grayscale(1)`);

//drag || drop 

window.addEventListener('drag', (event) => event.target.style.filter = 'grayscale(0)');
