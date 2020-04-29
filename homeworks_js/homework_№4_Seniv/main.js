let ask = prompt("Your password");
let a = 5;
while (ask != "logos" && ask != true) {
  a--;
  alert(`you have ${a} attempts left`);
  ask = prompt("Your password");
  if (a == 1) {
    alert("Try later");
    ask = true;
  }
}
if (ask = "logos" && ask != true) {
  alert("Welcome");
}
