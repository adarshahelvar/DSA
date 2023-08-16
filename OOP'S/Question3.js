// Write a program to create a class count_objects and calculate the number of objects that has been created in realtime.

class CountObjects {
  static count = 0; // Class variable to keep track of the number of objects created

  constructor() {
    CountObjects.count++; // Increment the count when a new object is created
  }

  static getCount() {
    return CountObjects.count; // Return the current count of objects
  }
}

// Creating objects of the class
const obj1 = new CountObjects();
const obj2 = new CountObjects();
const obj3 = new CountObjects();

// Getting and printing the count of objects
console.log("Number of objects created:", CountObjects.getCount()); // Output should be 3
