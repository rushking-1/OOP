class Class {
    constructor(num) {
        this.number = num;
    }

    getDisplayName(){
        return `Class ${this.number}`;
    }
    assignLeader(Student){
        if(Student.klass.number === this.number){
            this.leader = Student
            Student.id = 10000
        }
    }
}

export default Class;



