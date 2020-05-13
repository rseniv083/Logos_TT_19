document.body.style.fontSize = '30px';
let li = document.getElementsByTagName('li');

for(let i = 0; i < li.length; i++){
    li[i].onclick = function(){
        this.style.color = li[i].textContent;
    }
}