let container = document.querySelector('.container');

function createSmallDiv(count){
    for(let i = 1; i <= count; i++){
        let smallDiv = document.createElement('div');
        smallDiv.classList.add('smallDiv');
        container.appendChild(smallDiv);
    }
}

function createButtn(width){
    let buttn = document.createElement('div');
    buttn.style.width = width + 'px';
    buttn.classList.add('buttn');
    container.appendChild(buttn);
}


createSmallDiv(13);
createButtn(90);

createButtn(75);
createSmallDiv(13);

createButtn(95);
createSmallDiv(11);
createButtn(95);

createButtn(105);
createSmallDiv(10);
createButtn(105);

createButtn(810);

let letter = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspase',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', ' I', 'O', 'P', '[', ']', '\\',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift',
    ''
];


let keyCode = [
    '192', '49', '50', '51', '52', '53', '54', '55', '56', '57', '48', '189', '187', '8',
    '9', '81', '87', '69', '82', '84', '89', '85', '73', '79', '80', '219', '221', '220',
    '20', '65', '83', '68', '70', '71', '72', '74', '75', '76', '186', '222', '13',
    '16', '90', '88', '67', '86', '66', '78', '77', '188', '190', '191', '16',
    '32'
];

let allButtn  = document.querySelectorAll('div');

for(let i = 1; i < allButtn.length; i++){
    allButtn[i].textContent += letter[i - 1];
    window.addEventListener('keydown', function(event){
        if(event.keyCode == keyCode[i - 1]){
            allButtn[i].style.backgroundColor = 'gray';
        }
    })
    window.addEventListener('keyup', function(event){
        if(event.keyCode == keyCode[i - 1]){
            allButtn[i].style.backgroundColor = 'white';
        }
    })
}

