console.log("-------------------Assignment 1---------------------------");
console.log("-------------Arrow function with no arg & no return value----------");
let greet = () => {
    console.log("Hey...Good Afternoon, Today is Friday.");
}
greet()
console.log("-------------Arrow function with 3 arg & no return value----------");

let multiplication = (num1, num2, num3 = 1) => {
    console.log(`Multiplication of value =`, num1 * num2 * num3);

}
multiplication(5, 5, 2)
// multiplication(10, 4)

console.log("-------------Arrow function with 3 arg & no return value----------");
let multi = (num1, num2, num3 = 1) => {
    console.log(`multiplication of value with 3rd arg default value = `, num1 * num2 * num3);
}
multi(10, 4)
console.log("-------------Arrow function with 5 arg &  return value----------");
let add = (arg1, arg2, arg3, arg4, arg5) =>
    arg1 + arg2 + arg3 + arg4 + arg5

console.log(`Addition of(100,100,200,349,756) = `, add(100, 100, 200, 349, 756))
console.log("-------------Arrow function with 5 arg &  return value----------");

let text = (text1, text2, text3, text4, text5) =>
    text1 + text2 + text3 + text4 + text5
console.log(text("I am", " learning ", " ES6 ", " features ", " in depth"));
console.log("-------------------Assignment 2---------------------------");
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id,
            this.emp_name = emp_name,
            this.emp_dept = emp_dept;
        this.emp_salary = emp_salary,
            this.emp_company = emp_company
    }
}
let e1 = new Employee(22, "Anil", "IT", 50000, "TCS")
let e2 = new Employee(33, "Radha", "HR", 74000, "Wipro")
let e3 = new Employee(55, "Rishi", "Finance", 47000, "TCS")
let e4 = new Employee(66, "Sonali", "Finance", 45000, "Infy")
let e5 = new Employee(77, "Monika", "IT", 40000, "Wipro")
let e6 = new Employee(88, "Vinayak", "IT", 75000, "TCS")
let e7 = new Employee(99, "Mahesh", "HR", 85000, "Infy")
let arrayOfEmp = [e1, e2, e3, e4, e5, e6, e7]
for (const employees of arrayOfEmp) {
    if (employees.emp_company === "TCS") {
        console.log(`Employees Name - ${employees.emp_name } , Company Name - ${employees.emp_company}`);
    }
}
console.log("----------------------------------");
for (const employees of arrayOfEmp) {
    if (employees.emp_dept === "Finance") {
        console.log(`Employees dept - ${employees.emp_dept}, Employees Name - ${employees.emp_name}`);
    }
}
console.log("----------------------------------");
for (const employees of arrayOfEmp) {
    if (employees.emp_salary > 70000) {
        console.log(`Employees Name - ${employees.emp_name},  Employees Company - ${employees.emp_company},  Employees Salary - ${employees.emp_salary}`);
    }
}
console.log("----------------------------------");

for (const employees of arrayOfEmp) {
    if (employees.emp_salary >= 50000 && employees.emp_dept === "IT") {
        console.log(`Employees ID - ${employees.emp_id}, Employees Name - ${employees.emp_name},  Employees Department - ${employees.emp_dept},  Employees Salary - ${employees.emp_salary},  Employees Company - ${employees.emp_company}`);
    }
}
console.log("----------------------------------");

for (const employees of arrayOfEmp) {
    if (employees.emp_company === "Infy") {
        console.log(`Employees ID - ${employees.emp_id}, Employees Name - ${employees.emp_name},  Employees Department - ${employees.emp_dept},  Employees Salary - ${employees.emp_salary},  Employees Company - ${employees.emp_company}`);
    }
}

console.log("------USE ONLY forEach()------");

// let arrayOfEmp = [e1, e2, e3, e4, e5, e6, e7]
console.log("=======  Find out the ‘TCS’ employee details and log only name & company on console  ======="); 
arrayOfEmp.forEach((employee) => {
    if (employee.emp_company == "TCS") {
        console.log(`Name: ${employee.emp_name}, Company: ${employee.emp_company}`);
    }
});
console.log("----------------------------------");

arrayOfEmp.forEach((employees)=>{
    if (employees.emp_salary>=50000) {
        console.log(`Employees ID - ${employees.emp_id}, Employees Name - ${employees.emp_name},  Employees Department - ${employees.emp_dept},  Employees Salary - ${employees.emp_salary},  Employees Company - ${employees.emp_company}`);
        
    }

})

console.log("----------------------------------");

let sum=0
arrayOfEmp.forEach((employees)=>{ 
    if (employees.emp_dept==="HR"||employees.emp_dept==="IT"&& employees.emp_salary>=50000) {
        console.log(`Employees ID - ${employees.emp_id}, Employees Name - ${employees.emp_name},  Employees Department - ${employees.emp_dept},  Employees Salary - ${employees.emp_salary},  Employees Company - ${employees.emp_company}`); 
    }
})
console.log("----------------------------------");
// arrayOfEmp.forEach((employees)=>{
//     var nameOf =(`${employees.emp_name}`)
//     let uniqueArray = [...new Set(nameOf)]
//     console.log(uniqueArray);
// })
console.log("----------------------------------");


