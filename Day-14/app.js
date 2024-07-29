// Day 14: Classes
// Tasks/Activities:
// Activity 1: Class Definition
// • Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
  constructor(name, lastName, age) {
    this.name = name;
    this.age = age;
    this.lastName = lastName;
  }
  // • Task 7: Add a getter method to the Person class to return the full name (assume a firstName and last Name property). Create an instance and log the full name using the getter.
  get fullName() {
    return `${this.name} ${this.lastName}`;
  }

  // • Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
  set fullName(fullName) {
    const parts = fullName.split(' ');
    this.name = parts[0] || "";
    this.lastName = parts[1] || "";
  }

  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

let personA = new Person("Primis", "Teao", 32);
console.log(personA.greet());

// • Task 2: Add a method to the Person class that updates the age property and logs the updated age.
Person.prototype.ageUpdate = function () {
  this.age = this.age - 2;
  return this.age;
};
console.log(personA.ageUpdate());

// Activity 2: Class Inheritance
// • Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the student class and log the student ID.
class Student extends Person {
  static totalStudents = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    // • Task 6: Add a static property to the student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
    Student.updateStu();
  }
  static updateStu() {
    this.totalStudents++;
  }
  stuId() {
    return this.studentId;
  }
}
let stu1 = new Student("Kaju", 12, 1111);
console.log(stu1.stuId());

// • Task 4: Override the greeting method in the student class to include the student ID in the message. Log the overridden greeting message.
Student.prototype.greet = function () {
  return `Hi, my student ID is ${this.studentId}.`;
};
console.log(stu1.greet());

// Activity 3: Static Methods and Properties
// • Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
Person.genericGreet = function () {
  return "Hello, nice to meet you.";
};
console.log(Person.genericGreet());

// • Task 6: Add a static property to the student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
// ON TOP
let stu2 = new Student("Badam", 13, 1112);
console.log(`Total number of students: ${Student.totalStudents}`);

// Activity 4: Getters and Setters
// • Task 7: Add a getter method to the Person class to return the full name (assume a firstName and last Name property). Create an instance and log the full name using the getter.
// ON TOP
console.log(personA.fullName);

// • Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
personA.fullName = "Nice Topi";
console.log(personA.fullName);

// Activity 5: Private Fields (Optional)
// • Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
// • Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
