//Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

//A score of 50-60 is an F

//A score of 61-70 is a D

//A score of 71-80 is a C

//A score of 81-90 is a B

//A score of 91-100 is an A

//Start with array of random scores in your JavaScript

var f=0;
var d=0;
var c=0;
var b=0;
var a=0;

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

for (var i = 0; i< scores.length; i++){
	console.log(scores[i]);
	if (scores[i]<60) {
		f=f+1;
 } else if (scores[i]<70) {
 		d=d+1;
 } else if (scores[i]<80) {
 		c=c+1;
 } else if (scores[i]<90) {
 		b=b+1;
 } else if (scores[i]<100) {
 		a=a+1;
}}

console.log("there are", a , "a's");
console.log("there are", b , "b's");
console.log("there are", c , "c's");
console.log("there are", d , "d's");
console.log("there are", f , "f's");

var scoresSort = scores.sort(
      		function(a,b){
      		return a-b;


      		}
	);

console.log("scoresSort", scoresSort);

console.log(scoresSort[0]);
console.log(scoresSort[scores.length-1]);

