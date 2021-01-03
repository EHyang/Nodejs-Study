class Person{
    private name : string
    private age : number
    private merriage : boolean

    constructor(_name : string, age : number, merriage : boolean){
        this.name = _name
        this.age = age
        this.merriage = merriage
    }
    getName() {
        return this.name
    }
    getAge(){
        return this.age
    }
    getIsMerry(){
        return this.merriage
    }
}

const taeyang = new Person("taeyang", 27, false)

console.log(taeyang)

console.log(taeyang.getAge())

console.log(taeyang.getName())

console.log(taeyang.getIsMerry())


