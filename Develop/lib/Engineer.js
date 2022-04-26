// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

//CHILD CLASS - INHERITANCE
class Engineer extends Employee{

    constructor(id,name,email,github){
       super(id,name,email) //setting properties from parent class 
       this.github = github; 
    }
    //oveerriding parent value 
  getRole() {
    return "Engineer";
  }
  getGitHub(){
      return "https://github.com/"+ this.github; 
  }
}

// const emplEngineer = new Engineer(); 
// console.log(emplEngineer); 

// console.log(emplEngineer.getRole()); 
// console.log(emplEngineer.getGitHub()); 

module.exports = Engineer; 

