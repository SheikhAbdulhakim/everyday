/*let js = "amazing";
console.log(40 + 8 + 23 - 10);
let firtName = "sheik";
console.log(firstName);
let country = "ethiopia";
console.log(country);

let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'john');

javaScriptIsFun = "yes";
console.log(typeof javaScriptIsFun);
let year;
console.log(year);

let age = 30;
age = 31;
const birthYear = 1991;
var job = 'programmer';
job = 'teacher';
const ageJonas = 2037 - 1991;
const agaeSarah = 2037 -1991;
console.log(agaeJonas, agaeSarah);
//assigment operators
let x = 10 + 5;
x += 10;
console.log(x);
const now = 2037;
const agaJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1992 > now - 2018);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
const averageAge;
console.log(ageJonas + ageSarah) / 2;
var ncs = 54;
ncs = 54;
if(ncs === 54){
console.log("good")
}
else {
    console.log("not")
}
const name = 'sheikh';
if (name === jill) {
    console.log(name);
}
else {
    console.log('no name');
}*/
var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
}

