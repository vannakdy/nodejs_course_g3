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


// controll statement 

// - if , if else , if else if,
var average = 99;

if(average < 50) { // 69 < 50 => false
    console.log("Fail");
}

if(average < 50){
    console.log("Fail")
}else{
    console.log("Pass")
}

if(average >= 90 && average <= 100){
    console.log("Grade A");
}else if(average >= 80 && average < 90){
    console.log("Grade B");
}else if(average >= 70 && average < 80){
    console.log("Grade C");
}else if(average >= 60 && average < 70){
    console.log("Grade D");
}else if(average >= 50 && average < 60){
    console.log("Grade E");
}else if(average >= 0 && average < 50){
    console.log("Grade F");
}


// loop statement
// - for loop
    console.log("====== For loop ===")
    var arrName = ["Bona","Sok","Som"];

    for(var i = 0 ; i < arrName.length; i++){
        console.log("arrName["+i+"]= " +arrName[i])
    }
// - while loop
    var i = 0;
    while(i < arrName.length){
        console.log("arrName["+i+"]= " +arrName[i]);
        i++;
    }

// do while
    i = 0;
    do{
        console.log("arrName["+i+"]= " +arrName[i]);
        i++;
    }while(i < arrName.length)

// for in 
    for(var i in arrName){
        console.log(arrName[i])
    }
// for of
    console.log("== for off==")
    for(var i of arrName){
        console.log(i)
    }
// map
    console.log("== map ==")
    arrName.map((data,i)=>{
        console.log(i+"=>"+data)
    })
// forEach
    console.log("== forEach ==")
    arrName.forEach(item=>{
        console.log(item)
    })


// array 
    var person = [
        {
            id:1,
            fname : "sok",
            lname : "so",
            gender : "male",
            tel : "099999"
        },
        {
            id:2,
            fname : "Bona",
            lname : "Chan",
            gender : "male",
            tel : "099999888"
        },
        {
            id:3,
            fname : "Jon",
            lname : "Ra",
            gender : "male",// => female
            tel : "099999888"
        },
        {
            id:4,
            fname : "X",
            lname : "Y",
            gender : "male",
            tel : "099999888"
        },
    ];

    // 

    // person[2].gender = "female";

    // update persion id = 3 => gender = female;
    var idUpdate = 3;
        // way1
        person.map((item,index)=>{
            if(item.id == idUpdate){
                person[index].gender = "Female"//
                person[index].fname = "AA"//
                person[index].lname = "BB"//
            }
        })

        // way2
        var idDelete = 4;
        person = person.map((item,index)=>{
            if(item.id == idDelete){
                return {
                    ...item,
                    tel:"55555555"
                };
            }
            return item;
        })

    // delete id = 3;
        // way1
            // var idDelete = 1;
            // var arrTmp = []
            // person.map((item,index)=>{
            //     if(item.id != idDelete){
            //         arrTmp.push(item)
            //     }
            // })
            // person = arrTmp;
        // way2 use function filter 
            // var idDelete = 4;
            // person = person.filter((item,index)=>item.id != idDelete)

    

    console.log("==== List persion ====");
    // console.log(person[2].fname)
    for(var i = 0 ; i < person.length ; i++){
        // var fname = person[person.lastName]; error
        // var fname = person.firstName; // error
        // var fname = person[i].fname // correct
        // var lname = person[i].lname; // correct
        console.log(person[i].fname+" "+person[i].lname+" "+person[i].gender+" "+person[i].tel);
    }
    console.log("==== List persion1 ====");
    for(var element of person){
        console.log(element.fname+" "+element.lname+" "+element.gender+" "+element.tel);
    }

    console.log("==== List persion use map ====");
    person.map((item,index)=>{
        console.log((index+1)+" "+item.fname+" "+item.lname+" "+item.gender+" "+item.tel);
    })





















