// mouseover (hovering over nav links changes them to red for .5 seconds)
const nav = document.querySelector('nav');

nav.addEventListener('mouseover', (e) => e.target.style.color = 'red');

nav.addEventListener('mouseover', (e) => {
    e.target.style.color = 'red';
    setTimeout(() => e.target.style.color = '', 500);
});

// keydown (pressing R changes the logos color)
const logo = document.querySelector('.logo-heading');

document.addEventListener('keydown', (e) => {
    if(e.keyCode === 82){
        logo.style.color === '' ? logo.style.color = 'red' : logo.style.color = ''
    }
});

// wheel (scrolling the wheel over images causes them to expand or shrink)
const img = document.querySelectorAll('img');

img.forEach((e) => {
    e.addEventListener('wheel', (event) => {
        event.preventDefault();
        let scale = 1;
        scale += event.deltaY * -0.01;
        scale = Math.min(Math.max(.125, scale), 4);
        e.style.transform = `scale(${scale})`;
    })
})

// load (when the window loads an alert will pop up with the string provided)
// window.addEventListener('load', () => alert('Welcome to the Fun Bus!'));

//focus ()
const buttons = document.querySelectorAll('.btn');

buttons.forEach(e => {
    e.addEventListener('click', (e) => {
        e.target.style.backgroundColor === '' ? e.target.style.backgroundColor = 'purple' : e.target.style.backgroundColor = '';
    })
})

//resize (when the window gets resized the body turns grey and the text turns white)
const body = document.querySelector('body');
const text = document.querySelector('*');

window.addEventListener('resize', () => {
    body.style.backgroundColor = 'grey';
    text.style.color = 'white';
})

//scroll (when scrolling the text changes to 1rem but when the pageYOffset is 0 it remains or changes to normal)
window.addEventListener('scroll', () => pageYOffset != 0 ? text.style.fontSize = '1rem' : text.style.fontSize = '')

//mouseup (any text in a p element I select will get turned to the color red)
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(e => {
    e.addEventListener('mouseup', event => {
        let selection = document.getSelection ? document.getSelection() : document.selection.createRange();
        let range = selection.getRangeAt(0);
        let newNode = document.createElement('span');
        newNode.setAttribute('class', 'selector'); //<span class = "selector"></span>
        range.surroundContents(newNode); //<span class = "selector">text i selected</span>
    })
})

// dblclick (double clicking on an image turns it to grayscale)
img.forEach(e => {
    e.addEventListener('dblclick', (el) => {
        el.target.style.filter = 'grayscale(1)';
    })
})

// drag/drop (dragging an image will turn the grayscale img back to normal)
img.forEach(e => {
    e.addEventListener('drag', el => {
        el.target.style.filter = 'none';
    })
})