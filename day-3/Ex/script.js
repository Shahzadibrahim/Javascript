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



let people = ["Greg", "Mary", "Devon", "James"];
people.splice(0, 1,);{
console.log(people);
}

people.splice(3, 1, 'Jason')
console.log(people);

people.push('Shahzad');
console.log(people);

for (let i in people){
console.log(people[i]);
}

for (let i = 0; i < people.length; i++) {
  if (people[i] === 'jason') {break;}
 people += "jason " + i + "<br>";
}


const users = [  
  { id: 1, name: 'Marcus' },
  { id: 2, name: 'Norman' },
  { id: 3, name: 'Christian' }
]

for (const user of users) {  
  if (user.id === 2) {
    break            // exits the loop early
  }

  console.log(user)
}

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