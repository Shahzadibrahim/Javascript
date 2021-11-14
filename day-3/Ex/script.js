// Ex-1

// let colors = ["blue","green","red","yellow","orange"];

// for(i=0; i<= colors.length-1; i++) {
//   if( i == 0 ){ 
//     console.log("My "+ (i+1) +"st" + " choice is " + colors[i]); 
//           }
//  else if (i == 1) {
//     console.log("My "+ (i+1) +"nd" + " choice is " + colors[i]); 
//   }
//   else if (i == 2) {
//     console.log("My "+ (i+1) +"rd" + " choice is " + colors[i]); 
//   }
//   else{
// console.log("My "+ (i+1) +"th" + " choice is " + colors[i]);
//   }
//  }



// let people = ["Greg", "Mary", "Devon", "James"];
// people.splice(0, 1,);{
// console.log(people);
// }

// people.splice(3, 1, 'Jason')
// console.log(people);

// people.push('Shahzad');
// console.log(people);

// for (let i in people){
// console.log(people[i]);
// }

// for (let i = 0; i < people.length; i++) {
//   if (people[i] === 'jason') {break;}
//  people += "jason " + i + "<br>";
// }


// const users = [  
//   { id: 1, name: 'Marcus' },
//   { id: 2, name: 'Norman' },
//   { id: 3, name: 'Christian' }
// ]

// for (const user of users) {  
//   if (user.id === 2) {
//     break            // exits the loop early
//   }

//   console.log(user)
// }

// let i;
// for (i = 0; i < people.length; i++) {
//   if (i === jason) {
//     break;
//   }
//   people += "jason " + i + "<br>";
// }

// let str = prompt('please enter a verb');

// if(str.length>=3 && str.substr(str.length-3) !='ing'){
//    str = str + 'ing';
// }
// else if (str.length>=3 && str.substr(str.length-3) ==='ing'){
//    str = str + 'ly';
// }
//    console.log(str);

// if(str.length >= 3){
//    if(!str.endsWith('ing')){
//       str = str + 'ing';
//    }
//    else if (str.endsWith('ing')){
//       str = str + 'ly'
//    }
// }
// console.log(str);



// ex1: your favourite colors
let colors =["","lilac","coral", "blue", "sage green", "light yellow"];
for (let i=[1]; i<colors.length; i++){
  console.log(" My " + i + " # colour is ")
  console.log(colors[i]);

}


// ex2:list of people:

let people = ["Greg", "Mary", "Devon", "James"]; 

people.shift();
console.log(people);

people.splice (2,1, "Jason");
console.log(people);

people.push ("DonkeyKong");
console.log(people);

 for (let i=[0]; i<people.length; i++){
  console.log(people[i]);
}

for (let i=0; i<people.length; i++){
 console.log(people[i]); // include jason
  if (people [i] === "Jason") {
      break;

    }
  //console.log here, remove Jason
  }


  console.log(people.slice (1,3))
  console.log(people.indexOf("Mary"));

console.log(people.indexOf("Foo")); // it is -1 due to it not belonging to the element

let last = people.length-1
console.log(people[people.length-1]);

// ex3: repeat the question

let number = prompt("type a number");
console.log(number);
number = Number(number)
while(number < 10 ){
  number=prompt("write a number above 10")
  number = Number(number)
  }
console.log(number)

// ex4

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

console.log(building.numberOfFloors);

console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);

if ((building.numberOfRoomsAndRent.sarah[1]+ building.numberOfRoomsAndRent.david[1])> building.numberOfRoomsAndRent.dan[1]){
  console.log(building.numberOfRoomsAndRent.dan[1]=1200);

}

console.log(building);

// ex5

let family = {
  parents : ["mum","dad"],
  siblings : ["sister","brother"],

}

 let len = family.length;
 for (let w = 0 ; w<len ; w++ ){
  console.log(w);
 }
  console.log(family);
  console.log(family.parents);
  console.log(family.siblings);

// ex6 

let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
console.log( ' my ' +  details.my + ' is ' +  details.is + ' the ' + details.the);

// ex7

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
console.log(names.sort());
let NaMes = names.toString();
let arr = NaMes.split("");
console.log(arr);
arr.splice(1,6);
arr.splice(2,7);
arr.splice(3,4);
arr.splice(4,4);
arr.splice(5,6);
arr.splice(6,7);
console.log(arr);
NaMes=arr.join("");
console.log(NaMes);



// dailychallenge

let sentence = "the movie is not that bad, i like it";

let wordNot =  sentence.indexOf("not");
console.log(wordNot);

let wordBad =  sentence.indexOf("bad");
console.log(wordBad);


let arr = sentence.split(""); //separate the phrase ,depending of what is inside the ""
console.log(arr);
if(wordNot<wordBad && wordNot != -1 && wordBad != -1) {
arr.splice(wordNot,wordBad-wordNot+3, "good");

console.log (arr);
sentence= arr.join("");

}
console.log(sentence)

-----------------------------------------------------------------

// exercise gold

// ex1

let numbers = [123, 8409, 100053, 333333333, 7]
for (  i = 0 ; i<numbers.length ; i++){
  if ( i %3 == 0){
    console.log('true');

  }
  else {
    console.log (' false');
  }
}

// ex2

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}  
let names = prompt ("student name");
console.log(names);

if ( names in guestList ){
  console.log("Hi! I'm " + names + " , and I'm from " + guestList[names]+ ". ");
}
else {
  console.log(" Hi! I'm a guest.");
}


// ex 3

let age = [20,5,12,43,98,55];
let sum = 0
for(let i=0; i<age.length; i++){
  sum+=age[i];
}
console.log(sum)
// // *let indexofApples = fruits.indexOf("Apples")
// // console.log(indexofApples)*/
// // fruits.splice(indexofApples,1);


let least = 0;
age.forEach((element) => {
  if (least < element) {
    least = element;
  }
});
console.log({least});

--------------------------------------------------

// Dailychallenge1:
// using one loop:

// let arr = "*";
// let a = "";
// for (i = 1; i<= 6 ; i++){
//   a +=arr;
//   console.log(a)
// }



// using nested loops:





dailychallenge2:
const numbers = [5,0,9,1,7,4,2,6,3,8];
numbers.toString();
console.log(numbers.toString());
let n = numbers.join("+");
console.log(n);
let p = numbers.join("");
console.log(p);
let j = numbers.join("-");
console.log(j);
let k = numbers.join("*");
console.log(k);


