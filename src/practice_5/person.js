class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    a_introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
    introduce(){
        return this.a_introduce();
    }
}
export default Person ;



