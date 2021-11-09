//d aily challange
// step 1

let sentence = "The movie is not that bad, I like it";
// step 2
let wordNot = sentence.indexOf("not");
console.log(wordNot);
// step 3

let wordBad = sentence.indexOf("bad");
console.log(wordBad);
// step 4
let arr = sentence.split("");
console.log(arr);
if(wordNot<wordBad && wordNot != -1 && wordBad != -1){
	arr.splice(wordNot, wordBad-wordNot+3, "good");
	console.log(arr);
}
console.log(sentence)