////////////////////////////////////////////////////////////////////////////////
// Welcome to the 2nd exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// Wow, look at you! You did even know how to declare a constant and now
// you want to do object oriented programming (OOP). I love your ambition!

// Let's get started with classes.

// I hope you don't get bored. If so, just continue with the exercises
// in the next file at your own pace. You will find the solutions in the
// folder called solutions.



// EXERCISE 1. Classes (ES6 syntax).
///////////////////////////////////
// Time to create your first Person class. It is a great step in the life
// of every programmer.
//
// The Person class should take as input three parameters:
// - first name
// - last name
// - year of birth
// and have a method called sayHi which prints to console a sentence
// combining them.
class Person {

    constructor(first, last, year) {
        this.first = first;
        this.last = last;
        this.year = year;
    }

    sayHi() {
        console.log('Hi, I am ' + this.first);
    }
}

var brendan = new Person('Brendan', 'Eich', 1961);

// EXERCISE 1. Bonus. Prototypical Inherintance.
///////////////////////////////////////////
// You can still create a class like in the good old days of JavaScript.
// It is actually very illuminating to understand what classes and objects
// really are in JavaScript, and what "prototypical inherintance" means.
// What is prototypical inherintance? If you are ready to take on this journey
// to the JavaScript Enlightment continue below.

// a. Create a normal function (without using the class keyword) and call it
// OldPerson. Replicate the behavior of the constructor of Exercise 1.
function OldPerson(first, last, year) {
    this.first = first;
    this.last = last;
    this.year = year;
}

// b. Did you know that you can use the 'new' operator with 'normal' functions?
// Try it to create the classic brendan object, but call it oldBrendan now.
oldBrendan = new OldPerson('Brendan', 'Eich', 1961);

// Could you do it? If so, great! Now let's add a method to the OldPerson class.
// In JavaScript everything is an object, so is the OldPerson class. It has
// even got a special property that you did not define. It comes already
// shipped-in, it's gift by Brendan. This property is the "prototype."
// What is the prototype? It is an object that contains the "schema" that
// will be applied to every new object created with this class. In other words,
// it is a prototype! So what is the prototype for the OldPerson class?
console.log(OldPerson.prototype);

// b. It is am empty object! Don't be confused. Don't mix up the OldPerson
// function itself with its prototype, they are two different concepts.
// The function OldPerson is the constructor of the class that you defined
// in Exercise 1. The prototype object contains all the other mehtods and
// properties that you added wrapped within the parentheses of the class
// definition. Not clear? Let's try with an example. Add the method sayHi
// to the OldPerson's prototype.
// Hint: add a property exactly as you would do for any other object, and
// declare it to be a function.
OldPerson.prototype.sayHi = function() {
    console.log('Hi, I am ' + this.first);
};

// c. Now let's create a new object named oldBrendan2 from the class OldPerson,
// then invoke the method sayHi on it. Did it work?
oldBrendan2 = new OldPerson('Brendan', 'Eich', 1961);
oldBrendan2.sayHi();

// c. Now the magic. What happened to brendan? I mean the brendan you created
// at point b.? Can he say hi? Try it.
oldBrendan.sayHi();

// Holy moly, oldBrendan speaks! If you are not surprised, let's recap the
// steps. First, you defined the function oldPerson and created an object
// with it. After that you changed the function's prototype and that
// automatically got applied to oldBrendan. This is the magic of the
// prototypical inherintance. All the objects share a reference to the same
// prototype object, any change to the prototype is immediately propagated
// to every present and future object of the same class. Impressive, Brendan!


// d. But how does prototypical inherintance reaaaally work? You are really
// curious, aren't you? Here is another treat by JavaScript. Every object has
// a secret property called __proto__. That is the prototype. Check it out.
oldBrendan.__proto__;

// e. What do you think will happen if you make a change to the __proto__
// object? Try it. Add a new method to the __proto__ object of oldBrendan
// named boom which prints 'boom!'.
oldBrendan.__proto__.boom = function() {
    console.log('boom!');
};

// Now try it to execute it on oldBrendan.
oldBrendan.boom();
// And on oldBrendan2.
oldBrendan2.boom();
// And check OldPerson.prototype.
OldPerson.prototype;

// The magic of prototypical inherintance.

// Behind there is still a prototype object.
// So if you make changes to
console.log(Person.prototype);
console.log(brendan.__proto__)
