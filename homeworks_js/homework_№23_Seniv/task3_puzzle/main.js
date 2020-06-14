let container = document.getElementsByClassName("container");
const parts = 3;

$(function () {
  cutPuzzles(parts);
  mixedPuzzles(parts);
});

let form = document.forms["form"];
form.addEventListener("click", function () {
  container[0].innerHTML = "";
  container[1].innerHTML = "";

  const value = form.level.value;
  const parts = value;
  cutPuzzles(parts);
  mixedPuzzles(parts);
});

function cutPuzzles(parts) {
  const size = 400 / parts;
  for (let x = 0; x < parts; x++) {
    for (let y = 0; y < parts; y++) {
      let puzzle = document.createElement("div");
      puzzle.style.width = size + "px";
      puzzle.style.height = size + "px";
      puzzle.classList.add("p");
      backgroundPosition(puzzle, y * -size, x * -size);
      container[0].appendChild(puzzle);
    }
  }
  for (let i = 0; i < parts * parts; i++) {
    let div = document.createElement("div");
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.classList.add("hint");
    container[1].appendChild(div);
  }
}

function backgroundPosition(puzzle, x, y) {
  puzzle.style.backgroundPositionX = x + "px";
  puzzle.style.backgroundPositionY = y + "px";
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mixedPuzzles(parts) {
  let components = document.getElementsByClassName("p");
  for (let i = 0; i < parts * parts; i++) {
    const random1 = getRandomInt(0, parts * parts - 1);
    const random2 = getRandomInt(0, parts * parts - 1);

    const cachedBackgroundPosition1 = components[random1].style.backgroundPosition;

    components[random1].style.backgroundPosition = components[random2].style.backgroundPosition;
    components[random2].style.backgroundPosition = cachedBackgroundPosition1;

    $(components[i]).draggable({
      snap: ".hint",
      snapMode: "both",
    });
    
  }
}
