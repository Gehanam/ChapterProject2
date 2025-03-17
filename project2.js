let myName = 'Chris Stewart';
let paraOne = document.getElementById("p1");

paraOne.textContent = myName;

let n1 = 7
let n2 = 14

let numSum = n1 + n2;

document.getElementById("p2").textContent = numSum;

let numMulti = n1 * n2;
document.getElementById("p3").textContent = numMulti;

let myNameAddNum = myName + n2
document.getElementById("p4").textContent = myNameAddNum;

let myNameNumMulti = myName * n2;
document.getElementById("p5").textContent = myNameNumMulti;

let age = 46
let ageCompare = age >= numMulti;
document.getElementById("p6").textContent = ageCompare;
alert(numMulti - age + " What i wouldnt give to be " +  age / 2);

n1 = 14
n2 = 28