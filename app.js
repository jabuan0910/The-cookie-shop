'use strict'


function generateGreeting(){
    let firstName = getFirstName(); // Mango
    let message = timeOfDay(); // Good Afternoon
    return document.write('Hello ' + firstName + ', ' + message + '!');
}

function getFirstName(){
    let firstName = prompt('What is your name?'); //Mango
    return firstName;
}


function timeOfDay(){
    let time = prompt('What hour is it (0-24)');
    let message = '';


    if(time <= 11 && time > 0){
        message = 'Good Morning!!';
    } else if (time <= 18){
     message = 'Good Afternoon!!';
    } else if (time <= 24){
     message = 'Good Night!!';
    } else{
      message = 'Good Day!!';
    }
    
    return message;
}


function getCookiePicture(){
    let answer = prompt ('pick 1 or 2');
    let image = '';
    if(answer == 1){
        image = '<img class="subImage" alt="cookie image 1" src="https://via.placeholder.com/300x150.png?text=Cookie+pic+1">'
    } else {
        image = '<img class="subImage" alt="cookie image 1" src="Milk-cookies.jpg">'

    }
    return document.write(image);
}



// getGreeting(firstName);
// function getGreeting(yourName){
//     console.log('Hello, ' + yourName );
//     console.log('this was run from the function');
// }

// James is not equal to James
// === strict equals
// == loose equals (truthy or a falsy) '1' == 1
// if(firstName.toLowerCase() === 'james'){
//      console.log('Your name is james!')
// }

// output to the console some value
// console.log('your age is: ' + age);
// console.log('You have ' + numberOfCats + ' cats');

// dynamic 
// let firstName = prompt('What is your Name?');

//   call the function getGreeting with the ARGUMENT of firstName
// getGreeting(firstName);
// let time = prompt('What time is it (0-24?)'); 
// let message = '';
// if the time time of day is before noon then we ant to say "Good Morning"

// other programs
// if(time <= 11){
    // message = 'Good Morning!!';
    // console.log('Good Morning!!');
// } else if (time <= 18){
    // message = 'Good Afternoon!!';
    //console.log('Good Afternoon!!');
// } else if (time <= 24){
    // message = 'Good Night!!';
    // console.log('Good Night!');
// } else{
    // message = 'Good Day!!';
    //console.log('Have a Great Day!')
//}


//console.log('done with program');

// document.write('some value');

// James is not equal to James
// == strict equals
// == loose equals (truthy or a falsy) '1' == 1
// if(firstName.tolowerCase() === 'james'){ 
//    console.log('Your name is James!');
// }

// output to the console some value
// console.log('your age is: ' + firstName);
// console.log('You have ' + numberOfDogs + ' dogs');

