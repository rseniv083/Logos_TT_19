let div = document.querySelector('div');
div.style.width = '200px';
div.style.height = '200px';
div.style.backgroundColor = 'violet';
div.style.position = 'absolute';
div.style.top = 'calc(50% - 100px)';
div.style.left = 'calc(50% - 100px)';

let index = 0;
let color = ['red', 'yellow', 'green'];

div.onmouseover = function(){
    this.style.backgroundColor = color[index];
    index++;
    if(index >= color.length){
        index = 0;
    }
}

div.onmouseout = function(){
    this.style.backgroundColor = 'violet';
}
    
