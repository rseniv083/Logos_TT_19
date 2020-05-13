let div = document.querySelector('div');
div.style.width = '400px';
div.style.height = '400px';
div.style.backgroundColor = 'violet';
div.textContent = 'У мене є секрет...';
div.style.fontSize = '30px';
div.style.textAlign = 'center';
div.style.position = 'absolute';
div.style.top = 'calc(50% - 200px)';
div.style.left = 'calc(50% - 200px)';

function style(){
    this.style.backgroundColor = 'black';
    this.style.backgroundImage = 'none';
    this.textContent = 'Хочеш знати який?';
    this.style.color = 'white';
}

div.onmouseover = style;

div.onmouseout = function(){
    this.style.backgroundColor = 'violet';
    this.textContent = 'У мене є секрет...';
    this.style.color = 'black';
}

div.onmousedown = function(){
    this.style.backgroundImage = 'url(https://www.shmyandeks.ru/wp-content/uploads/2014/10/anekdoty_pro_obezyan_7.jpg)';
    this.textContent = 'А я тобі не скажу';
    this.style.color = 'red';
}

div.onmouseup = style;