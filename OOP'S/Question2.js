/* 
Create a class Employee Having 3 attributes (name, year of joining, address)

Create a constructor to initialize the attributes in realtime on object creation.

Create a function print_details to print the details of the employee. (it should be just separated by a space).




Robert      1994        64C-WallsStreet

Sam        2000        68D-WallsStreet

John        1999        26B-WallsStreet.
*/

class Employee {
  constructor(name, yearOfJoining, address) {
    this.name = name;
    this.yearOfJoining = yearOfJoining;
    this.address = address;
  }

  print_details() {
    console.log(`${this.name} ${this.yearOfJoining} ${this.address}`);
  }
}

// Creating instances of the Employee class
const employee1 = new Employee("Robert", 1994, "64C-WallsStreet");
const employee2 = new Employee("Sam", 2000, "68D-WallsStreet");
const employee3 = new Employee("John", 1999, "26B-WallsStreet");

// Printing details of the employees
employee1.print_details();
employee2.print_details();
employee3.print_details();
