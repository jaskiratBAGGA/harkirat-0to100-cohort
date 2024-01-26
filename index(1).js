function getLength(str){
  console.log("Original String: ", str);
  console.log("Length of the string: ", str.length);
}
getLength("Hello World");


 function findIndexOf(str, target){
   console.log("Original String: ", str);
   console.log("Index of the target string: ", str.indexOf(target));
 }
findIndexOf( "I am a hacker", "hacker");

function getSlice(str, start, end){
  console.log("Original String: ", str);
  console.log("Sliced String: ", str.slice(start, end));
  console.log(str.substr(2, 6));
}
getSlice("I am a hacker", 7, 9);

const str = "Hello World";
console.log(str.replace("ld", "everyone"));

const value = "  Hi my name is Jaskirat   ";
const words = value.split(" ");
console.log(words);

console.log(value.trim());
console.log(value.toUpperCase());
console.log(value.toLowerCase());


console.log(parseInt("42"));
console.log(parseInt("42px"));
console.log(parseInt("42.5px"));


console.log(parseFloat("42"));
console.log(parseFloat("42px"));
console.log(parseFloat("42.5px"));

const initialArray = [1, 2, 3, 4];
initialArray.push(11);
console.log(initialArray);


const initialArray = [1, 2, 3, 4];
initialArray.pop();
console.log(initialArray);

const initialArray = [1, 2, 3, 4];
initialArray.shift();
console.log(initialArray);

const iniArray = [1, 2, 3, 4];
iniArray.unshift(11);
console.log(iniArray);


const initialArray = [1, 2, 3, 4];
const secoArray = [5, 6, 7, 8];
console.log(initialArray.concat(secoArray));


function logString(str){
  console.log(str + "a");
}
const initialArray = [1, 2, 3, 4];
initialArray.forEach(logString);



class Animal{
  constructor(name, legCount){
    this.name = name;
    this.legCount = legCount;
  }
  speak(){
    console.log(this.name + " makes a sound");
  }
}
let dog = new Animal("Dog", 4);
let cat = new Animal("Cat", 4);

cat.speak();



const currentDate = new Date();
console.log(currentDate.getMonth());
console.log(currentDate.getDate());
console.log(currentDate.getYear());
console.log(currentDate.getFullYear());
console.log(currentDate.getHours());

currentDate.setFullYear(2022);
console.log("After setFullYear:", currentDate);

console.log("Time in milliseconds since 1970:", currentDate.getTime());


function calculateSum(){
  let a = 0;
  for(let i = 0; i < 10000000; i++){
    a = a+i;
  }
  return a;
}
const beforeDate = new Date();
const beforeTimeMs = beforeDate.getTime();
calculateSum();  

const afterDate = new Date();
const afterTimeMs = afterDate.getTime();

const timeTaken = afterTimeMs - beforeTimeMs;
console.log("Time taken to execute the function:", timeTaken, "milliseconds");


const users = '{"name":"jaskirat", "age":20, "gender":"male"}';
const user = JSON.parse(users);
console.log(user["gender"]);

const user={
  name: "jaskirat",
  age: 20,
  gender: "male"
};
const jsonString = JSON.stringify(user);
console.log(jsonString);


function square(n){
  return n*n;
  
}
function cube(n){
  return n*n*n;
}
function sumOfSomething(a, b, callback){
  console.log(a);
  console.log(callback);
  const val1 = callback(a);
  const val2 = callback(b);  
  return val1 + val2;
}
const ans = sumOfSomething(2, 3, cube);
console.log(ans);






































