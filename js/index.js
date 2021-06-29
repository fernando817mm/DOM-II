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

//focus

document.querySelectorAll('.btn').forEach(b => b.addEventListener('click', (e) => {
    e.target.style.backgroundColor === 'purple' ? e.target.style.backgroundColor = '' : e.target.style.backgroundColor = 'purple'
}));

//resize

const body = document.querySelector('body');

window.addEventListener('resize', () => body.style.backgroundColor = '#4f4f4f');

//scroll

const logo = document.querySelector('.logo-heading');

window.addEventListener('scroll', () => pageYOffset === 0 ? logo.style.color = '' : logo.style.color = 'red');

//select 🛑🛑🛑🛑🛑 STUDY MORE 🛑🛑🛑🛑🛑

document.querySelector('p').addEventListener('mouseup', () => {
    const selection = document.getSelection().toString();
    console.log(selection);
})

//dblclick

window.addEventListener('dblclick', (event) =>  event.target.style.filter = `grayscale(1)`);

// //drag || drop 

window.addEventListener('drag', (event) => event.target.style.filter = 'grayscale(0)');
