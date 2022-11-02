console.log("------Assignment ---------");
console.log("---------Q1 Vehicle---------");
class Type_of_Vehicle {
    constructor(name , Model, Wheeler,number, no_sits, color, speed){
        this.name = name;
        this.Model=Model;
        this.Wheeler=Wheeler;
        this.number = number;
        this.no_sits= no_sits;
        this.color=color;
        this.speed=speed;
    }
}
let Vehicle = new Type_of_Vehicle("Car", "Scorpio", 4,"MH-1111", 8,"White", "80-90kmph" );
let Bike = new Type_of_Vehicle("Bike", "R15", 2,"MH-1221", 2, "Red/Black", "70-80kmph" );
let Bolero = new Type_of_Vehicle("pickup", "Bolero", 4,"MH-1010", 4, "White", "80-90kmph" );
let Bus = new Type_of_Vehicle("RedBus", "Double-Decker", 8,"MH-0000", 100, "Red/Black", "120kmph" );
let Truck = new Type_of_Vehicle("Tipper", "T3211", 10, "MH-5487", 3,"Yello", "80-90kmph" );



console.log(Vehicle);
console.log(Bike);
console.log(Bolero);
console.log(Bus);
console.log(Truck);

console.log("---------Q1 College---------");

class college {
    constructor(Type_of_college, Name, city, code, ) {
        this.Type_of_college = Type_of_college
        this.Name = Name;
        this.city = city;    
        this.code = code;
    }
}
let Art_college = new college("Private", "shri shivaji college","Pune",0147);
let Commerce_college = new college("Government", "Government commerce","Kolhapur",2587);
let Science_college = new college("private", "shri shivaji college","Amravti",3698);
let Engg_college = new college("Government", "Government college of Engineering","Nagpur",1236);
let Pharmacy_college = new college("Private", "Anuradha college of pharmacy","Chikhali", 4569);
let Medical_college = new college("Goevernment", "Government college of medical","Mumbai",7896);


console.log(Art_college);
console.log(Commerce_college);
console.log(Science_college);
console.log(Engg_college);
console.log(Pharmacy_college);
console.log(Medical_college);

for (const key in Art_college) {   
        const element = Art_college[key];
        console.log(element);
        
    }
    console.log("---------------");
    for (const key in Commerce_college) {   
        const element = Commerce_college[key];
        console.log(element);
        
    }
    console.log("---------------");

    for (const key in Science_college) {   
        const element = Science_college[key];
        console.log(element);
        
    }
    console.log("---------------");

    for (const key in Engg_college) {   
        const element = Engg_college[key];
        console.log(element);
        
    }
    console.log("---------------");

    for (const key in Pharmacy_college) {   
        const element = Pharmacy_college[key];
        console.log(element);
        
    }
    console.log("---------------");

    for (const key in Medical_college) {   
        const element = Medical_college[key];
        console.log(element);
        
    }