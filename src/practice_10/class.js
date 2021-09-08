class Class {
    constructor(num) {
        this.number = num;
    }

    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(Student){
        if(Student.klass === this){
            this.leader = Student
            Student.id = 10000
        }else {
            console.log(`It is not one of us.`)
        }
    }
    appendMember(student){
        student.klass = this;
    }
    isIn(student){
        if(student.klass==this){
            return true;
        }else {
            return false;
        }
    }
}

export default Class;





