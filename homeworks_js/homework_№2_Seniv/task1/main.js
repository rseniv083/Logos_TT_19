let qw1 = prompt('Яка температура кипіння води?\n а)180 градусів\n б)100 градусів\n в)150 градусів');
let qw2 = prompt('Копенгаген - столиця...?\n а)Данії\n б)Фінляндії\n в)Швейцарії');
let qw3 = prompt('З чого складаються молекули?\n а)з протонів\n б)з електронів\n в)з атомів');
let qw4 = prompt('Батьківщина мандаринів?\n а)Турція\n б)Китай\n в)Індія');
let qw5 = prompt('Скільки щупалець у кальмара?\n а)12\n б)8\n в)10');
let qw6 = prompt('Як називається книга Гітлера?\n а)Моя війна\n б)Моє життя\n в)Моя боротьба');
let qw7 = prompt('Що здатне подолати звуковий барєр?\n а)Будильник\n б)Батіг\n в)Млин');
let qw8 = prompt('Які комахи здатні робити процедуру, подібну до вакцинації?\n а)Мурахи\n б)Бджоли\n в)Комарі');
let qw9 = prompt('Ентомологія - наука про...?\n а)Людські емоції\n б)Древні мови\n в)Комах ');
let qw10 = prompt('Що потрібно додати до заліза, щоб виготовити сталь?\n а)Мідь\n б)Алюміній\n в)Вуглець');

let result = 0

if(qw1 == 'б'){
    result++;
}
if(qw2 == 'а'){
    result++;
}
if(qw3 == 'в'){
    result++;
}
if(qw4 == 'б'){
    result++;
}
if(qw5 == 'в'){
    result++;
}
if(qw6 == 'в'){
    result++;
}
if(qw7 == 'б'){
    result++;
}
if(qw8 == 'а'){
    result++;
}
if(qw9 == 'в'){
    result++;
}
if(qw10 == 'в'){
    result++;
}

if(result>=0 && result<=3){
    alert(`${result} балів. Мабуть, ви були неуважні:( Спробуйте ще раз`)
}
else if(result>=4 && result<=6){
    alert(`${result} балів. Непоганий результат`)
}
else if(result>=7 && result<=9){
    alert(`${result} балів. Чудово!`)
}
else if(result=10){
    alert(`${result} балів. Ви виграли золоту медаль і звання Ерудит!`)
}



