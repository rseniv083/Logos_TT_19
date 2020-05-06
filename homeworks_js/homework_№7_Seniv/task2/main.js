let MyMath = {}
MyMath.a = 5;
MyMath.b = 2;
MyMath.sum = function(){
    let s = this.a + this.b;
    console.log(`5 + 2 = ${s}`);    
}
MyMath.multiplication = function(){
    let m = this.a * this.b;
    console.log(`5 * 2 = ${m}`); 
}
MyMath.division = function(){
    let d = this.a / this.b;
    console.log(`5 / 2 = ${d}`); 
}
MyMath.subtraction = function(){
    let s = this.a - this.b;
    console.log(`5 - 2 = ${s}`); 
}

MyMath.sum();
MyMath.multiplication();
MyMath.division();
MyMath.subtraction();