//DONT DO THIS
/*var myVariable = 'I am at the global scope';

function myVariable() {
    console.log(myVariable);
}
*/

// do this
// RETURNING A FUNCTION



/*function one() {
    return 'alex'
}*/

//let value = one()
//console.log(value);

//console.log(one()); // this works same as the above two lines

//let value = one;
//console.log(typeof value);
//console.log(typeof one);
//console.log(value()); // invoke ()

//types of values
/* 1 string
   2 number
   3 boolean
   4 undefined
   5 function
   */

   /*function two() {
       return function() {
           console.log('two');
       }
   }

   let myFunction = two();
   myFunction();
   */

   function three() {
       return function() {
           return 'three'
       }
   }

   console.log(three()())