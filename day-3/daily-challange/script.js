
// with nested loop

// let n = 6;
// let stars = "" ;
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     stars += " * " ;
//   }
//   stars += "\n";
// }
// console.log(stars);


// repeat

// let str = 'abc '.repeat(6);
// console.log(str);

// use only loop

// for (let i = 0; i < 6; i++) {
//   let str = '* '.repeat(i + 1)
//   console.log(str);
// }


// gold buble

// let arr = [5,0,9,1,7,4,2,6,3,8]; // if alphabets use string 'a','b','c'...etc
// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
//   for(let j = 0; j < arr.length; j++){
//     if (arr[i] < arr[j]){ // if you want to change 9 to 0 change < to >
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);