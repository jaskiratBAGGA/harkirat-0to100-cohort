console.log("Hello W");
console.log(a)

let fname = "Raj";
let lname = "Kumar";
let greeting = "Hello" + " "+ fname + " " + lname;
console.log(greeting);

const a = 1;
console.log(a);

let firstName = "Raj";
let age = 25;
let isMarried = false;

if (isMarried == true){
  console.log(firstName + " " + "is married");
}else{
  console.log(firstName + " " + "is not married");
}

let answer = 0;
for (let i = 0; i <= 1000; i++) {
  answer = answer + i;
}
console.log(answer);

const personArray = ["harkirat", "raj", "kumar"];
const ages = [25, 26, 27];
const numberOfPeople = ages.length;
for (let i = 0; i < numberOfPeople; i++) {
  if (ages[i] % 2 == 0) {
    console.log(personArray[i] + " " + "is even");
  }
  else{
    console.log(personArray[i] + " " + "is odd");
  }
} 


const personArray = ["harkirat", "raj", "kumar"];
const gender = ["male", "male", "female"];

const user1 = [{
  firstName : "harkirat",
  gender : "male"
}]
console.log(user1["gender"]);

const allUsers = [{
  firstName : "harkirat",
  gender : "male"
},{
  firstName : "raj",
  gender : "male"
},{
  firstName : "kumar",
  gender : "female"
}]

for (let i = 0; i < allUsers.length; i++){
  if (allUsers[i]["gender"] == "male"){
    console.log(allUsers[i]["firstName"] + " " + "is male");
  }
}


function findSum(a, b){
  return a + b;
}

const val = findSum(2, 3);
console.log(val);


function sum(num1, num2, funCall) {
  let result = num1 + num2;
  funCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}
const val = sum(2, 3, displayResult);


