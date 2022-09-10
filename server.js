console.log("Hello Welcome Node.js")
console.log(100)
console.log(100.22)
console.log(100+100)
console.log("dara"+100)
// const , var , let
const PI = 3.14;
var qty = 10; 
var price = 10.3;
var total = qty * price;
var value1 = 10, value2 = 20;
var display = "Total amount = "+total.toFixed(4) + " $"; 
var display1 = `Total amoun = ${total.toFixed(4)}$`; 
var display2 = `Total amoun = ${qty * 2}$ `; 
var display3 = `Value1 = ${value1} and Value2 = ${value2}`;
var display4 = "Value1 = " + value1 + " and Value2 = " + value2;

var data1;
data1 = 100;
data1 = 200;

console.log(qty)
console.log(price)
console.log(total.toFixed(4))
console.log(display)
console.log(display1)
console.log(display2)
console.log(display3)
console.log(display4)
console.log(data1)


function displayName(name="",gener=""){
    console.log("My name is "+name+ " and i am "+gener)
    // console.log(`My name is ${name} and i am ${gener}`)
}

function getTotalPrice(){
    return 100.22;
}

function sumData(v1=0,v2=0){
    return v1 + v2;
}

displayName("Som","Male");
displayName("Channa",100.20);

var price = getTotalPrice();
var sum = "" + ( sumData(4,4) + sumData(5,5) ) ;

console.log(price)
console.log("sum = "+sum);


// array 
console.log("==== Array =====")
var arrName = []; // empty array
arrName = ["Som","Dara","Sok","Jon","Ronaldo","Messi"]; // array string
console.log("arrName = " + arrName.length + " elements") // length return  total elements of array
console.log(arrName[0]); // access element of array index 0
console.log(arrName[1]);
console.log(arrName[100]);
console.log(arrName[arrName.length - 1]);

arrName = [23,55,44,23,56]; // array number

console.log("arrName = " + arrName.length + " elements") // length return  total elements of array
console.log(arrName[0]); // access element of array index 0
console.log(arrName[1]);
console.log(arrName[arrName.length - 1]);


// object
console.log("==== Object =====")
var obj1 = {} // empty object
obj1 = {
    key1 : "sok",
    key2 : ["Sok","Som","Jon","Bona","Sok","Som","Jon"],
    sub : {
        a : 10,
        b : 20,
        sub1 : {
            x : 1,
            y : 2,
        }
    }
};

console.log(obj1.key1)
console.log(obj1.key2)
console.log(obj1.key3)

console.log(obj1.sub.a)
console.log(obj1.sub.b)

console.log(obj1.sub.sub1.x)
console.log(obj1.sub.sub1.y)

console.log(obj1.key2[obj1.key2.length-1])

var person = {
    firstName: "John",
    lastName: "Bona",
    age: 50,
    eyeColor: "blue",
    a:{
        x :1,
        y :1,
        z :1,
    },
    b:2
};

person = {
    ...person,
    firstName: "Som",
    lastName: "Sok",
    // firstName: "John",
    // lastName: "Bona",
    // age: 50,
    // eyeColor: "blue"
}
console.log(person.firstName +" " +person.lastName + " "+person.age + " "+person.eyeColor  )
console.log(Object.keys(person).length)
console.log(Object.keys(person.a).length)


















