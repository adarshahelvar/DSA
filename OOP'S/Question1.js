/*
Write a JavaScript class called car that represents a car object. The car class should have the following features:

A constructor function that takes two parameters, col and speed, and sets them as properties of the car object.
A method named printing_funct() that prints the color and speed of the car to the console.
Another method named calculate_velocity(time) that takes a time parameter and returns the velocity of the car, calculated as the speed divided by the given time.
Create a new instance of the car class with the color "red" and speed 130. Calculate the velocity of the car when the time is 2, and display the car's details and the calculated velocity to the console.

*/

class car {
  constructor(col, speed) {
    this.color = col;
    this.speed = speed;
  }
  priting_funct() {
    console.log(this.color, this.speed);
  }

  calculate_velocity(time) {
    return this.speed / time;
  }
}

let creata = new car("red", 130);
let vel = creata.calculate_velocity(2);
creata.priting_funct();
console.log(`Velocity of car is ${vel}`);
