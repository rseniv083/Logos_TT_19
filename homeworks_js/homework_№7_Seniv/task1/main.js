let person = {};
person.firstname = 'Ivan';
person.secondname = 'Ivanov';
person.showdata = function(){
    console.log(`${this.firstname} ${this.secondname}`);
}

let newPerson = {}
    for(let key in person){
    newPerson[key] = person[key];
    }
    
newPerson.firstname = 'Petro';
newPerson.secondname = 'Petriv';

person.showdata();
newPerson.showdata();