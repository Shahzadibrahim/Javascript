
// Excercise 1 (i)
// function infoAboutMe(){
// 	let name = 'shahzad';
// 	let age = 36;
// 	let hobby = 'cricket';
// 	console.log(name + " " + age + " "+ hobby);
// }
// 	infoAboutMe()

// Excercise 1 (ii)
// let name = 'shahzad';
// let age = 36;
// let favoriteColor = 'blue'
// function infoAboutMe(personName, personAge, personFavoriteColor) {
//   for (let i = 0; i < infoAboutMe.length; i++) {
    
//   }
// }
// console.log(name + age + favoriteColor);


// Excercise 1 (iii)
// function infoAboutMe(personName, personeAge, personeFavoriteColor){
// 	console.log(personName);
// 	console.log(personeAge);
// 	console.log(personeFavoriteColor);
// }
// infoAboutMe(shahzad, + 36, + cricket)


// Excercise 1 (iv)
// function infoAboutMe(personName, personeAge, personeFavoriteColor){ 
// 	console.log('My Name is', personName + " " + 'and I am', personeAge + " " + 'and my favorit color is', personeFavoriteColor);
// }
// infoAboutMe('shahzad', 36, 'black')


// Excercise 1 (v)
// function infoAboutMe(personName, personeAge, personeFavoriteColor, ){ 
// 	console.log(personName + " " + personeAge + ", " +  personeFavoriteColor);
// }
// infoAboutMe('"David"', 45, '"blue"')
// infoAboutMe('"Josh"', 12, '"Yellow"')


// Excercise 1 (vi)

// let infoAboutPerson = (personName, personAge, personFavoriteColor, personHobbies = []) => {
// 	console.log ("His name is " + personName + " and he is " + personAge + " yrs old. His fav. color is " + personFavoriteColor + " and here are his hobbies:")
// 	for (let i = 0 ; i < personHobbies.length ; i++){
// 	console.log(personHobbies[i])
// }

// }
// 	infoAboutPerson("David", 45, "blue" , ["tennis", "painting"])
// 	infoAboutPerson("Josh", 12, "yellow" ,["videoGame", "hanging out with friends", "playing cards"])


// Excercise 2
// function checkDriverAge(result){

// 	if (result === 18) {
// 		alert('Congratulations on your first year of driving. Enjoy the ride')
// 	} else if(result > 18) {
// 		alert('Powering on. Enjoy the ride')
// 	} else {
// 		alert('Sorry, you are too young to drive a car. Powering off')

// 	}
// }	

// checkDriverAge(18)


// Excercise 3
// function checkNumber(){
// 	for(let i=0; i<100; i++){
// 	if (i === 0) {
// 		console.log(i +  " is even")
// 	}
// 	else if (i % 2 === 0) {
//         console.log(i + " is even");   
//     }
//     else {
//         console.log(i + " is odd");
//     }
// }

// }
// checkNumber()


// Excercise 4

// let input = (num) => {
// 	if (num < 50) {
// 		console.log(0.2 * num)
// 	}
// 	else if (num >= 50 && num <= 200){
// 		console.log (0.15 * num)
// 	}
// 	else {
// 		console.log(0.1 * num)
// 	}
// }
// input(100)


// Excercise 5


// let arr = []
// let isDivisible = (divisor) => {
// 	for (let i = 0; i<=500; i++){
// 		if ((i % divisor) == 0){
// 			console.log (i + " is divisible by " + divisor);
// 			arr.push(i)
// 		}
// 	}
// }
// isDivisible(23)
// console.log(arr)
// let sumArr = (arr) => {
// 	let num = 0
// 	for (let i=0; i<arr.length; i++){
// 		num = num + arr[i]
// 	}	
// 	return num;
// } 
// let a = sumArr(arr)
// console.log(a)


// Excercise 6


// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }
// let item = prompt ("Enter your desired item.")
// let checkBasket =  (res,item) => {
// 	console.log(res,item)
// 	for (i in res){
// 		console.log(res[i])
// 		if (i == item) {
// 			console.log(res[i] + " is in you basket.");
// 			return true
// 		}
// 	}
// 	return false
// }
// let a = checkBasket(amazonBasket, item)
// if (a){
// 	console.log("exist")
// }
// else {
// 	console.log("Not exist")
// }


// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  
// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// let arr = ["banana","orange","apple"]
// let sum = 0
// let myBill = (arr) => {
// 	for (let i = 0; i <= arr.length; i++){
// 		if (stock[arr[i]] > 0){
// 			console.log(stock[arr[i]])
// 			sum += Number(prices[arr[i]])
// 		}
// 	}
// 	console.log(sum)
// }
// myBill(arr)


// let wallet = {
//     quarters: 0.25,
//     dimes: 0.10,
//     nickle: 0.05,
//     penny: 0.01,
// }
// let changeEnough =  () => {
// 	for (i in wallet){
// 		console.log(wallet[i])
// 		if (i == wallet) {
// 			console.log(wallet[i] + " is in my wallet.");
		
// 		}
// 	}
	
// }
// changeEnough()



// Excercise XP - Gold - 1


// is_Blank =  function(input) {
//         if (input.length === 0)
//         return true;
//         else 
//         return false;
//       }
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));

// Excercise - 2

// abbrevName = function (str1) {
//     var split_names = str1.trim().split(" ");
//     if (split_names.length > 1) {
//         return (split_names[0] + " " + split_names[1].charAt(0) + ".");
//     }
//     return split_names[0];
// };
// console.log(abbrevName("Robin Singh"));


// Excercise - 3

// let text = 'The Quick Brown Fox'.split('');

// (function () {
//     text.forEach((item, index) => {
//         item.match(/[A-Z]/g) ? text[index] = item.toLowerCase() : text[index] = item.toUpperCase();
//     });
//     console.log(text.join(''));
// })();


// Ex-4

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]

// function isOmnipresent(arr, val) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!arr[i].includes(val)) {
//             return false
//         }
//     }
//     return true;
// }


