const Employee = require("./Employee");

//CHILD CLASS - INHERITANCE
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email); //setting properties from parent class
    this.officeNumber = officeNumber;
  }
  //oveerriding parent value
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

// const newManager = new Manager(12,"Starbucks"," coffee@gmail.com", 56);
// console.log(newManager);

// console.log(newManager.getRole());

module.exports = Manager;
