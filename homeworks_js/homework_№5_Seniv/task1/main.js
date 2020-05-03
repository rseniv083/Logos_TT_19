let number = +prompt('Write a number');

switch(number){
    case 1:
    case 2:
    case 12:
        alert('Winter');
        break;
    case 3:
    case 4:
    case 5:
        alert('Spring');
        break;
    case 6:
    case 7:
    case 8:
        alert('Summer');
        break;
    case 9:
    case 10:
    case 11:
        alert('Autumn');
        break;
    default:
        alert('Not possible');
        break;
}