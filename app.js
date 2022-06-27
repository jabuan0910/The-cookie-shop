'use strict'
// use strict tells us to follow some baseline 'strict rules'

// variable = storing data s values.

// Comment out in mass
// highlight all the lines
// CTRL + K + C

// declaring the variable first name to be equal to value of james
// let firstName = 'James'; // string
// let lastName = 'Abuan'; // single or double are acceptable
// let numberOfCats = 2; // number
// let lovesCoffee = true; // boolean

// dynamic 
let time = prompt('What time is it (0-24?)'); 
let message = '';
// if the time time of day is before noon then we ant to say "Good Morning"

// other progrms
if(time <= 11){
    message = 'Good Morning!!';
    //console.log('Good Morning!!');
} else if (time <= 18){
    message = 'Good Afternoon!!';
    //console.log('Good Afternoon!!');
} else if (time <= 24){
    message = 'Good Night!!';
    // console.log('Good Night!');
} else{
    message = 'Good Day!!';
    //console.log('Have a Great Day!')
}


//console.log('done with program');

document.write('some value');

// James is not equal to James
// == strict equals
// == loose equals (truthy or a falsy) '1' == 1
// if(firstName.tolowerCase() === 'james'){ 
//    console.log('Your name is James!');
// }



// output to the console some value
console.log('your age is: ' + firstName);
// console.log('You have ' + numberOfDogs + ' dogs');

