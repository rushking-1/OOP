import Person from './person'

class Teacher extends Person{
    constructor(name, age, Class){
        super(name,age)
        this.klass = Class
    }
    introduce() {
        if(!this.klass){
            return `${super.introduce()} I am a Teacher. I teach No Class.`
        }else{
            return `${super.introduce()} I am a Teacher. I teach Class ${this.klass.number}.`
        }
    }
    introduceWith(student){
        if(this.klass==student.klass){
            return `${super.introduce()} I am a Teacher. I teach ${student.name}.`
        }else{
            return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`
        }
    }
}
export  default Teacher;
