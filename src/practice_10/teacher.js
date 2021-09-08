import Person from './person'
class Teacher extends Person {
    constructor(name,age,id,klasses) {
        super(name,age,id);
        this.klasses = klasses;
    }

    introduce() {
        if(!this.klasses){
            return `${super.introduce()} I am a Teacher. I teach No Class.`
        }else{
            let midSectionofClass = [];
            for(let i of this.klasses){
                midSectionofClass.push(i.number);
            }
            return `${super.introduce()} I am a Teacher. I teach Class ${midSectionofClass}.`
        }
    }
    isTeaching(student){
        if((student.klass.number==this.klasses[0].number)||(student.klass.number==this.klasses[1].number)){
            return true;
        }else{
            return false;
        }
    }
}
export default Teacher;








