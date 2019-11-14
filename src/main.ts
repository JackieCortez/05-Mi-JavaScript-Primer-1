/*onsole.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");*/


// Declaracion de una funcion
/*let myFunc = function (){
  console.log("This is a statement");
};

myFunc();*/

// Declaracion de una funcion con parametros
/*let myFuncParam = function(name, weather, ...extraArgs){
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today");
  for(let i = 0; i < extraArgs.length; i++){
    console.log("Extra Arg: " + extraArgs[i]);
  }
};

myFuncParam("Jackie", "Otoño", "Uno", "Dos", "Tres", "Cuatro");*/

//Funciones lambda
/*let myFunc = (nameFunction) => ("Hello " + nameFunction() + ".");
let printName = (nameFunction, printFuntion) => printFuntion(myFunc(nameFunction));
printName(function () {return "Jackie"}, console.log);*/


//Usando Variables y Tipos
/*let messageFunction = function (name, weather){
  var message = "Hello, Jackie";
  if(weather == "sunny"){
    var message = "It is a nice day";
    console.log(message);
  } else {
    var message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
}

messageFunction("Jackie", "raining");*/

//Using Variable Closure
/*let myFunc = function(name){
  let myLocalVar = "sunny";
  let innerFunction = function(){
    return ("Hello " + name + ". Today is " + myLocalVar + ".");
  };
  return innerFunction();
};

console.log(myFunc("Jackie"));*/

//Usign Primitive Types.
//Booleans
let firstBool = true;
let secondBool = false;
//Strings 
let firstString = "This is a string";
let secondString = "And so is this"; 

//Using Template String
/*let messageFunction = function(weather){
  let message = `It is ${weather} today`;
  console.log(message);
}

messageFunction("rading");*/

//Numbers 
let daysInWeek = 7;
let pi = 3.14;
let hexValue = 0XFFFF;


//Using Conditional Statements 
let namee = "Jacqui";

if(namee == "Adam"){
  console.log("Name is Adam");
} 
else if(namee == "Jacqui"){
  console.log("Name is Jacqui");
} 
else{
  console.log("Name is neither Adam or Jacqui");
}

switch(namee){
  case "Adam":
    console.log("Name is Adam");
    break;
  case "Jacqui":
    console.log("Name is Jacqui");
    break;
  default:
    console.log("Name is neither Adam or Jacqui");
    break;
}


let firstVal = 5;
let secondVal = 5;

if(firstVal === secondVal){
  console.log("They are the same");
}
else{
  console.log("They are not the same");
}

//Explicitly Converting Types
let myData1 = 5+5;
let myData2 = 5+"5";

console.log(myData1);
console.log(myData2);

//Convert Numbers to Strings 
let myData3 = (5).toString() + String(5);
console.log("Result: " + myData3);

//Convert Strings to Numbers
let firstVal3 = "5";
let secondVal3 = "5";
let result = Number(firstVal3) + Number(secondVal3);
console.log("Result: " + result);

//Arrays
let myArray = [100,"Adam", true];
console.log("Index 0: " + myArray[0]);
myArray[0] = "Tuesday";
console.log("Index 0: " + myArray[0]);

//Enumerating the Contents of an Array 
let myArray2 = [100,"Adam", true];

for(let i = 0; i < myArray2.length; i++){
  console.log(`Index ${i}: ${myArray2[i]}`);
}

console.log("----");

myArray2.forEach((value, index) => console.log(`Index ${index}: ${value}`));

//Using the Spread Operatod
let otherArray = [...myArray, 200, "Bob", false];
for(let i = 0; i < otherArray.length; i++){
  console.log(`Àrray item ${0}: ${otherArray[i]}`);
}

//Using the Built-in Array Methods
let products = [{name:"Hat", price:24.5, stock: 10},
  {name:"Kayak", price:289.99, stock: 1},
  {name:"Soccer Ball", price:10, stock: 0},
  {name:"Running Shoes", price:116.50, stock: 20}
];

/*Select the items in the array whose stock value is greater than zero 
and use the reduce method to determine the total value of those items*/
let totalValue = products.filter(item => item.stock > 0)
                          .reduce((prev, item) => prev + (item.price * item.stock),0);
console.log(`Total value: $${totalValue.toFixed(2)}`);

