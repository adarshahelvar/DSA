// Create a class named 'Shape' with a method to printShape "This is shape". 
// Then create two other classes named 'Rectangle', 'Circle' inheriting the Shape class, 
// both having a method to print "This is rectangle" and "This is circle" respectively. 
// Create a child class 'Square' of 'rectangle' having a method to printSquare "Square is a rectangle". 
// Now call the method of 'Shape' and 'Rectangle' class by the object of 'Square' class.

class Shape {
    printShape() {
      console.log(`This is shape`);
    }
  }
  
  class Rectangle extends Shape {
    printRectangle() {
      console.log(`This is rectangle`);
    }
  }
  
  class Circle extends Shape {
    printCircle() {
      console.log(`This is circle`);
    }
  }
  
  class Square extends Rectangle {
    printSquare() {
      console.log(`Square is a rectangle`);
    }
  }
  
  const square = new Square();
  square.printShape();      // Output: This is shape
  square.printRectangle();  // Output: This is rectangle
  