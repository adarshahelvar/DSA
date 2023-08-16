// Create a class "PARENT" with a method print that prints "this is a parent class" 
// and its Child class "CHILD" with a method print that prints "this is a child class". 
// Now, create an object for each of the class and call

// 1 - method of parent class by object of parent class
// 2 - method of child class by object of child class
// 3 - method of parent class by object of child class



class Parent {
  print() {
    console.log(`This is parent class`);
  }
}
class Child {
  print() {
    console.log(`This is Child class`);
  }
}

// method of parent class by object of parent class
const parent1 = new Parent();
parent1.print();

// method of child class by object of child class
const child1 = new Child();
child1.print();

// method of parent class by object of child class
child1.__proto__.print.call(parent1);
