/*
Access modifiers let you modify who can access various properties/methods on an object.
This is a benefit for data encapsulation, as you don't risk overexpose things that should not be relied upon.

Typically in javascript, methods are public by default, which means, anyone can access that method if they wish.

In python the typical way to indicate that something should not be used, is to prepend it with an underscore (_my_method).
*/

class Animal {
  // Anyone should be able to access name
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Rhino extends Animal {
  constructor() {
    super("Rhino");
  }
}

class Person {
  // Only the Person call should be able to access name
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  // Can't access name as its private in the parent class
  // Only the parent class knows it exists
  // sayMyName() {
  //   console.log(this.name);
  // }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

// console.log(employee.name);
// console.log(animal.name);

animal = rhino;
// animal = employee; // Error: 'Animal' and 'Employee' are not compatible
