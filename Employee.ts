class Employee1
{
    Id:number;
    Name:string;
    Basic_Sal:number;
   

    constructor(Id: number, Name: string, Basic_Sal: number)
    {
        this.Id = Id;
        this.Name = Name;
        this.Basic_Sal = Basic_Sal;
    }

    calculateGrossSal() : Number
    {
       const hra = this.Basic_Sal * 0.10;
       const da = this.Basic_Sal *.20;
       const ta = this.Basic_Sal * 0.30;

       const gross_sal = this.Basic_Sal + hra + da + ta;
       return gross_sal;
   }

    print() : void
    {
        const gross_sal = this.calculateGrossSal();
        const hra = this.Basic_Sal * 0.1;
        const da = this.Basic_Sal * 0.2;
        const ta = this.Basic_Sal * 0.15;

    console.log(`Employee ID: ${this.Id}`);
    console.log(`Employee Name: ${this.Name}`);
    console.log(`Basic Salary: ${this.Basic_Sal}`);
    console.log(`HRA: ${hra}`);
    console.log(`DA: ${da}`);
    console.log(`TA: ${ta}`);
    console.log(`Gross Salary: ${gross_sal}`);
    }
}

const e = new Employee1(1, "John Doe", 50000);
e.print();