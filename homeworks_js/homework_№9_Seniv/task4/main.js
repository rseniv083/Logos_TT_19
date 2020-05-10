let ask = prompt('Write a URL adress');

if(ask.indexOf('http://') >= 0){
   console.log(ask.substr(7));
}
else if(ask.indexOf('https://') >= 0){
    console.log(ask.substr(8));
}
