class Car{
    
    constructor(brand){
        this.carName = brand;
    }

    present(){
        return "I have " + this.carName;
    }
}


class Model extends Car{
    constructor(brand, model){
        super(brand);
        this.model = model;
    }

    show(){
        return this.present() + ", but this is " + this.model;
    }
}


let obj = new Model("Fortuner", "Ferrari");

console.log(obj.show());