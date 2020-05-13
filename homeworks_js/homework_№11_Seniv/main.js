let background = prompt('Write a background color');
document.body.style.backgroundColor = background;

let fontType = prompt('Write a font type');
document.body.style.fontStyle = fontType;

let textAlign = prompt('Text align for title');
const h = document.querySelector('h1');
h.style.textAlign = textAlign;

let bckgrndP = prompt('Write a background color for paragpaph');
let textColor = prompt('Write a text color for paragpaph');
const p = document.querySelector('p');
p.style.backgroundColor = bckgrndP;
p.style.color = textColor;

for(let i = 1; i <= 3; i++){
    let createLink = prompt(`Write a ${i} link`);
    let linkColor = prompt(`Write a color for ${i} link`);
    const link = document.createElement('a');
    const br = document.createElement('br');
    link.text = createLink;
    link.target = '_blank';
    link.style.color = linkColor;
    p.appendChild(link).href = `http://${createLink}`;
    p.appendChild(br);
}


let colorTextDiv = prompt('Write a color for text in block');
let fontSize = prompt('Write a font size');
let fontWeight = prompt('Write a font-weight');
const div = document.querySelector('div');
div.style.color = colorTextDiv;
div.style.fontSize = fontSize;
div.style.fontWeight = fontWeight;

let markType = prompt('Write type of marking list');
const ul = document.querySelector('ul');
ul.type = markType;






