let pteacher = {
    tName: "Mohan Patil",
    age: 49,
    city: "Nagpur",
    education: "M.E . PhD",
    designation: "HOD",
    experience: "16 yr",
    workingCity : "Pune",
}
console.table(pteacher);
let teacher = {
    tName: "Mohan Patil",
    age: 49,
    city: "Nagpur",
    education: "M.E . PhD",
    designation: "HOD",
    experience: "16 yr",
    workingCity : "Pune",
    degree: {
        bachelor: "Computer Science",
        PHD: "Adv Computing",
    },
    certificate : {
        cer1: "Hacker Rank participation",
        cer2: "Certificate in IFE course",
        cer3: "Certificate in Adv programming",
    },
    totalDegree:function(){
   let concatDegree =`Teacher degrees are total degree are ==${this.degree.bachelor},${this.degree.PHD},${this.certificate.cer1},${this.certificate.cer2},${this.certificate.cer3}`
   return concatDegree;
 } 
}
delete teacher.city 
delete teacher.age
teacher.department = "Cse Dept"
teacher.collegeName = "COEP"
console.table(teacher);
console.table(teacher.degree);
console.table(teacher.certificate);
let concatDegree = teacher.totalDegree()
console.log(concatDegree);
