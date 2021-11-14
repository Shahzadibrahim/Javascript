// Ex-1

// let age = 14

// if (age >= 14 && age <= 90) {
// console.log("yes it can be reach the edge")
// }

// if (!(age >= 14 && age <= 90)) {
// console.log("not be equal")
// }

// if (age < 14 || age > 90) {
// console.log("equal")
// }


// Ex-2

// x = 9
// y = 4

// if (4 < 9) {
//   console.log("4 is less than 9");
// } 

// else {
//   console.log("4 is now bigger than 9");
// }


// Ex-3

// let newDog = "Chihuahua";
// let a = newDog.length;
// console.log(a);

// console.log(newDog.toLowerCase());
// console.log(newDog.toUpperCase());

// if ("newDog === Chihuahua") {
//   console.log("I Love Chihuahuas")
// }
// else {
//   console.log("I dont care, I prefer cats")
// }


// Ex-4

// let x = prompt("Enter a number: ");

// //check if the number is even
// if(x % 2 == 0) {
//     console.log("The number is even.");
// }

// // if the number is odd
// else {
//     console.log("The number is odd.");
// }

/*let age = prompt ("please enter your age");
console.log (Number(age));
age = Number(age);
if(age<18){
	alert("Sorry, you are too young to drive this car.Powering off");
}
 else if (age==18){
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
else { 
alert("Powering On. Enjoy the ride!");
}
let a = 2 + 2;
switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );// this will be the outcome
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}
let a = 2 + 2;
switch (a) {
  case 4:
    alert('Right!'); //  this will be outcome
    break;
  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;
  default:
    alert('The result is strange. Really.');
}
 let browser = 'Firefox'
if (browser==Edge)
	alert( “You’ve got the Edge!” );
else if (browser== 'Chrome'|| browser=='Firefox' || browser=='Safari'||browser== 'Opera');
alert( ‘Okay we support these browsers too’ );
else {
alert( ‘We hope that this page looks ok!’ );
}
/*switch (browser) {
  case ‘Edge’:
    alert( “You’ve got the Edge!” );
    break;
  case ‘Chrome’:
  case ‘Firefox’:
  case ‘Safari’:
  case ‘Opera’:
    alert( ‘Okay we support these browsers too’ );
    break;
  default:
    alert( ‘We hope that this page looks ok!’ );
}*/



//Check the range between
//Write an if condition to check that age is between 14 and 90 inclusively.
//“Inclusively” means that age can reach the edges 14 or 90.
let age = 20 



if (age >= 14 && age <= 90){
  console.log("true");
}
else {
  console.log("false");
}


//Check the range outside
//Write an if condition to check that age is NOT between 14 and 90 inclusively.
//Create two variants: the first one using NOT !, the second one – without it.

if (!(age >= 14 )&& ( age >=90) ){
console.log("true");
}

else{
  console.log("false");
}


if(age< 14 || age>90){
  console.log("right");
}


else {
  console.log("wrong");
}




//exercise1 - Simple if/ Else Statemnt
let x = 8;
let y = 6;
 
 if (x>y){
  console.log("x is the biggest number");
 }
else if (x<y){
  console.log("y is the biggest number");
}
else if (x==y){console.log("x is equal to y");
}

else {
  console.log("Error");
}

//exercise2 -  chihuahua
let a = newDog.length;
console.log(a)

console.log( newDog.toUpperCase());
console.log(newDog.toLowerCase());

if(newDog=='Chihuahua'){
  console.log("i love Chihuahuas,it's my favourite dog")

}

else {console.log('I dont care, I prefer cats');
}


//ex3 - even or odd

let number = prompt ("write any number");

if( number%2==0){
  console.log ("x is an even number");
}

else if (!( number%2==0)){
  console.log ("x is an odd number");
}
else {
  console.log("error");
}


//ex4 Group chat

/*let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let numuser = users.length;
console.log(numuser)
if (numuser == 0){
  console.log('no one is online');
}
else if (numuser == 1){
  console.log(users[0] + " is online ");
}
else if (numuser == 2){
  console.log(users[0] + "  and  " + users[1] + " are online ")
}
else if (numuser > 2){
  console.log(users[0] + "  and  " + users[1] + " and " + (numuser-2) + " more is online ")
}*/





gold exercise:

ex1- translator

// let language = prompt("which language do you speak?");
// console.log(language);

// console.log(language.toLowerCase());
//  if (language == "french"){
//    console.log("Bonjour");
//  }
//  else if (language == "english"){
//    console.log("Hello");
//  }

//  else if (language == "hebrew"){
//    console.log("Shalom");
//  }

// else {
//  console.log('01110011 01101111 01110010 01110010 01111001');
// }

//switch method
let language = prompt("which language do you speak?");
console.log(language.toLowerCase());
switch(language.toLowerCase()) {
case 'french':
alert( 'bonjour' );
break;
case 'english':
alert( 'hello' );
break;
case 'hebrew':
alert( 'shalom' );
break;
default:
alert('01110011 01101111 01110010 01110010 01111001')

}


//ex2- grade assigner

let grade = prompt ("type your grade");
console.log(Number(grade));
grade = Number(grade);

if(grade>90){
  console.log("A");
}


else if (grade >= 80 && grade<=90){
  console.log("B");
}

else if (grade >= 70 && grade<=80){
  console.log("C");
}

else if (grade< 70) {
  console.log("D");
}

else{
  console.log("fail");
}

//ex3 -verbing

 let str = prompt('please enter a verb');

// if (verb.length>=3 && verb.endsWith('ing')){
//  verb = verb + 'ing';
// }

// else if (verb.length>=3 && verb.endsWith('ing')){
//    verb + verb +'ly';
// }

// console.log(verb);

 if (str.length >=3){
  if(!str.endsWith('ing')){
    str =  str + 'ing';
  }
  else if (str.endsWith("ing")){
    str = str + 'ly'
  }
 }
console.log(str)