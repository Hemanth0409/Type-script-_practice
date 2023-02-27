class Emp_details{

    emp_id: number;
    emp_name: string;
    emp_designation: string;
    emp_salary: number;
    emp_pro?: string|number;
  
    constructor(emp_id: number,emp_name: string,emp_designation: string,emp_salary: number,emp_pro?: string){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_designation=emp_designation;
        this.emp_salary=emp_salary;
        this.emp_pro=emp_pro;
    }

public getEmpDetails() : void{
    console.log(`Emp_id:${this.emp_id}`)
    console.log(`Emp_name:${this.emp_name}`)
    console.log(`Emp_designation:${this.emp_designation}`)
    console.log(`Salary:${this.emp_salary}`)
    console.log(`Project:${this.emp_pro}`)
}
}
let displayEmpDetails = new Emp_details(101,"Hemanth","Software develope",50000,"webDevelopment")
displayEmpDetails.getEmpDetails();




