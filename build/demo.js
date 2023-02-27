"use strict";
class Emp_details {
    constructor(emp_id, emp_name, emp_designation, emp_salary, emp_pro) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_designation = emp_designation;
        this.emp_salary = emp_salary;
        this.emp_pro = emp_pro;
    }
    getEmpDetails() {
        console.log(`Emp_id:${this.emp_id}`);
        console.log(`Emp_name:${this.emp_name}`);
        console.log(`Emp_designation:${this.emp_designation}`);
        console.log(`Salary:${this.emp_salary}`);
        console.log(`Project:${this.emp_pro}`);
    }
    displayEmpDetails() {
        console.log(`Emp_id:${this.emp_id}`);
        console.log(`Emp_name:${this.emp_name}`);
        console.log(`Emp_designation:${this.emp_designation}`);
        console.log(`Salary:${this.emp_salary}`);
        console.log(`Project:${this.emp_pro}`);
    }
}
let empDetails = new Emp_details(101, "Hemanth", "Software developer", 50000, "webDevelopment");
let empDetails2 = new Emp_details(101, "Hemanth", "Software developer", 500000, "webDevelopment")
    .displayEmpDetails();
