// TODO: Write code to define and export the Employee class
//PARENT CLASS
class Employee {


    //Properties 
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  //Methods 
  getName() {
    return "Name: "+ this.name;
  }
  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

// const newEmployee = new Employee(12,"Namita"," test@gmail.com"); 

// console.log(newEmployee.name); 
// console.log(newEmployee.getName()); 

module.exports = Employee; 