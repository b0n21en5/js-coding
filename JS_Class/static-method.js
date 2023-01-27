// static methods are defined on the class itself

class MyClass{
    constructor(name){
        this.name = name
    }

    static hello(){
        return 'Hello from Static Method';
    }

    greet() {
        return 'May God bless You!';
    }
}

let Obj = new MyClass('Audi');


// static method must call with class
console.log(MyClass.hello());


// regular method must call with 
console.log(Obj.greet());

