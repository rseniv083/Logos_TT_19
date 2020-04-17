window.onload = (function() {
  var startRotation = -20;

  document.querySelector(".cube").style.transform =
    "rotateY(" + startRotation + "deg)";
});

(function() {
  var rotateY = -20,
    rotateX = 0;

  function rotate(direction) 
  {
    var i = 0;
    var maxRotation = 90;

    var step = 0;
    if (direction == "left") step = -1;
    if (direction == "right") step = 1;

    for (i = 0; i < maxRotation; i++) {
      rotateY += step;
      document.querySelector(".cube").style.transform =
        "rotateY(" + rotateY + "deg)";
    }
  }

  document.onkeydown = function(e) {
    if (e.keyCode === 37) rotate("left");
    else if (e.keyCode === 39) rotate("right");
  };
})();
