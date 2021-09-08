class Class {
    constructor(num,students) {
        this.number = num;
        this.students = [];
    }

    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(Student){
        if(Student.klass === this){
            this.leader = Student
            Student.id = 10000
            if(this.teacher){
                console.log(`I am ${this.teacher.name}. I know ${Student.name} become Leader of Class ${Student.klass.number}.`)
            }
        }else {
            console.log(`It is not one of us.`)
        }
    }
    appendMember(student){
        if(student.klass!==this){
            student.klass = this;
            this.students.push(student);
            if(this.teacher){
                if(this.teacher.isTeaching(student)){
                    console.log(`I am ${this.teacher.name}. I know ${student.name} has joined Class ${student.klass.number}.`)
                }
            }
        }
    }
    registerAssignLeaderListener(teacher){
         this.teacher = teacher;

    }
    registerJoinListener(teacher){
        this.teacher = teacher;
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






