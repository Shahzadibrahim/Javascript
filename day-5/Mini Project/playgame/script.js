let userPreference;
if (confirm("Do you want to continue?") == true) {
    alert("Lets Goo!");
} else {
     alert( "See you next time!");
}
function playTheGame(){
	let num1 = prompt('enter number');
	num1 = Number(num1);
 	let randomNum = Math.floor(Math.random()* num1);
 	
 	//console.log(randomNum);
	
	console.log(num1);
	console.log('your guess is',num1);
	console.log(num1 , randomNum);
	test( num1, randomNum)
    }
  function test(userNumber,computerNumber){
  	if (userNumber == computerNumber){
  		alert('WINNER');
  	}
  	else if (userNumber > computerNumber){
  		alert('your number is bigger then the computer’s, guess again');
  	}
  	else if (userNumber < computerNumber){
  		alert('Your number is smaller then the computer’s, guess again');
  	}
  	else{
  		alert('out of chances');
  	}
  }
