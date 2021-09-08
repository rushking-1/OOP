import Person from './person'
class Teacher extends Person {
    constructor(name,age,id,klass) {
        super(name,age,id);
        this.klass= klass;
    }

    introduce() {
        if(!this.klass){
            return `${super.introduce()} I am a Teacher. I teach No Class.`
        }else{
            return `${super.introduce()} I am a Teacher. I teach Class ${this.klass.number}.`
        }
    }
}
export default Teacher;






