let h1 = document.querySelector('h1');
$(function(){
    $('.black').slideDown(120000, function(){
        $('.black').slideUp(60000, function(){
            h1.textContent = '0';
        });
        h1.textContent = '1';
    })
});