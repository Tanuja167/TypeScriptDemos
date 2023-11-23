class Student1{

    rollno:number;
    name:string;
    s1 : number;
    s2 : number;
    s3 : number;

    constructor(rollno, name, s1, s2, s3)
    {
        this.rollno = rollno;
        this.name = name;
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;
    }
    
    calculate()
    {
       const totalmarks = this.s1 + this.s2 +this.s3;
       const percentage = totalmarks/3;
    }

    print()
    {

        const cal = this.calculate();
        const totalmarks = this.s1 + this.s2 +this.s3;
       const percentage = totalmarks/3;

        console.log(`TotalMarks : ${totalmarks}`);
        console.log(`Per : ${percentage}`);
    }

}

const s1 = new Student1(1, "Tanu", 45, 46, 47);
s1.print();