"use strict"; // treats all JS code as newer version

// alert(3 + 3); // will give a ReferenceError inside node but it will show a pop-up inside browser console

let name = "Shihab"
let age = 23
let inLoggedIn = false
let education;

/* 
    There are two categories of data types in JS. Primitive and Non-Primitive.

    Primitive: Primitive data types are used to store single value. 
        * Number
        * String
        * Boolean
        * Undefined => variable is declared but value isn't assigned yet
        * Null => representation of empty value
        * Symbol => unique
        
    Non-Primitive: Non-Primitive data types are used to store complex and multiple values.
        * Object
        * Array
*/

console.log(typeof education); // Undefined
console.log(typeof null); // Object

/*
    "typeof" in JavaScript is an operator used for type checking and returns the data type of the operand passed to it.
*/