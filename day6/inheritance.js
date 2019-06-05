'use strict'

// in ES5 these aren't classes but there are constructors

// we name constructors with a capital letter:
function Person(name, age, fingers){
    this.name = name;
    this.age = age;
    this.fingers = fingers;

    // we can define methods:
    this.sayName = function() {
        console.log(this.name);
    }
}

// we call constructors using the "new" keyword
let adam = new Person("Adam", 26, 10);
console.log(adam);
adam.sayName();

// what "new" does:
// 1: make a new empty object {}
// 2: call constructor with "this" set to that empty object

// ES5 uses prototypal inheritance to have something like
// the class hierachy of inheritance

// We'll make a student that is a "subclass", or "inherits"
// from Person

function Student(name, age, fingers, school) {
    this.school = school;
    this.__proto__= new Person(name, age, fingers);
}

let student = new Student("Max", 50, 10, 'VT');

console.log(student);
console.log(student.name);
student.sayName();

// in ES6, we can use classes instead, but these classes
// "syntactic sugar" under the hood nothing is different.

class PersonClass {
    constructor(name, age, fingers){
        this.name = name;
        this.age = age;
        this.fingers = fingers;
    }

    sayName() {
        console.log(this.name);
    }
}

let person2 = new PersonClass("Bill", 33, 9);
console.log(person2);