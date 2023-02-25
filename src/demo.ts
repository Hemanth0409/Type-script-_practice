class emp_details{
    emp_id: number;
    emp_name: string;
    emp_designation: string;
    emp_salary: number;
    emp_pro?: string|number;
  
    constructor(emp_id: number,emp_name: string,emp_designation: string,emp_salary: number,emp_pro: string){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_designation=emp_designation;
        this.emp_salary=emp_salary;
        this.emp_pro=emp_pro;
    }
}