const color = document.querySelector(".color");
const image = document.querySelector(".image");

function createContainerColor() {
  let container = document.createElement("div");
  container.classList.add("container");
  for (let i = 0; i < 9; i++) {
    let backgroundColors = [
      "red",
      "blue",
      "violet",
      "green",
      "chocolate",
      "gold",
      "silver",
      "pink",
      "brown",
    ];
    let childBox = document.createElement("div");
    childBox.style.backgroundColor = backgroundColors[i];
    childBox.classList.add("childBox");
    childBox.onclick = function () {
      document.body.style.backgroundColor = backgroundColors[i];
      if (image.onclick) {
        document.body.style.backgroundImage = "none";
      }
    };
    container.appendChild(childBox);
  }
  document.body.appendChild(container);
}

function createContainerImage() {
  let container = document.createElement("div");
  container.classList.add("container");
  for (let i = 0; i < 9; i++) {
    let backgroundImages = [
      "url(img/1.jpeg)",
      "url(img/2.jpeg)",
      "url(img/3.jpeg)",
      "url(img/4.jpeg)",
      "url(img/5.jpeg)",
      "url(img/6.jpeg)",
      "url(img/7.jpeg)",
      "url(img/8.jpeg)",
      "url(img/9.jpeg)",
    ];
    let childBox = document.createElement("div");
    childBox.style.backgroundImage = backgroundImages[i];
    childBox.classList.add("childBox");
    childBox.style.backgroundSize = "cover";
    childBox.onclick = function () {
      document.body.style.backgroundImage = backgroundImages[i];
      document.body.style.backgroundSize = "cover";
    };
    container.appendChild(childBox);
  }
  document.body.appendChild(container);
}

color.onclick = createContainerColor;
image.onclick = createContainerImage;




//ВАРІАНТ 2 - тут хотіла скоротити код, так як в попередньому майже все дублюється 2 рази. Але цей менш зрозумілий, тому залишила для себе перший варіант.

// let backgroundColors = ['red', 'blue', 'violet', 'green', 'chocolate', 'gold', 'silver', 'pink', 'brown'];
// let backgroundImages = ['url(img/1.jpeg)', 'url(img/2.jpeg)', 'url(img/3.jpeg)', 'url(img/4.jpeg)', 'url(img/5.jpeg)', 'url(img/6.jpeg)', 'url(img/7.jpeg)', 'url(img/8.jpeg)','url(img/9.jpeg)']

// function ar(arr, func){
//     let container = document.createElement('div');
//     container.classList.add('container');
//     for(let i = 0; i < 9; i++){
//         let childBox = document.createElement('div');
//         childBox.classList.add('childBox');
//         func(childBox, arr[i]);
//         container.appendChild(childBox);
//     }
//     document.body.appendChild(container);
// }

// function colors(childBox, arr){
//     childBox.style.backgroundColor = arr;
//     childBox.onclick = function(){
//         document.body.style.backgroundColor = arr;
//     }
// }

// function imgs(childBox, arr){
//     childBox.style.backgroundImage = arr;
//     childBox.style.backgroundSize = 'cover';
//     childBox.onclick = function(){
//         document.body.style.backgroundImage = arr;
//         childBox.style.backgroundSize = 'cover';
//     }
// }

// color.onclick = function(){
//     ar(backgroundColors, colors);
// };
// image.onclick = function(){
//     ar(backgroundImages, imgs);
// };
