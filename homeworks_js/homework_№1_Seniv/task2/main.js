let name = prompt('Write your name');
let widthMainDiv = prompt('Main div width');
let heightMainDiv = prompt('Main div height');
let bgMainDiv = prompt('Main div background color');
let widthSecondDiv = prompt('Second div width');
let heightSecondDiv = prompt('Second div height');
let bgSecondDiv = prompt('Second div background img');
let margin = 'auto';
let dislay = 'flex';
let center = 'center';
let space = 'space-evenly';
let column = 'column';
let bgSize = 'cover';

document.write(`<div style="margin:${margin};width:${widthMainDiv}px;height:${heightMainDiv}px;background:${bgMainDiv};display:${dislay};flex-direction:${column};align-items:${center};justify-content:${space};"><div style="width:${widthSecondDiv}px;height:${heightSecondDiv}px;background-image:url(${bgSecondDiv});background-size:${bgSize};"></div><h2>Welcome, ${name}</h2></div>`)

