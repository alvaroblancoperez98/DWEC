//alert("Hello to JS");
console.log("xabaleria!");

var table = "Normal Table";
let chair = "One chair";
console.log(table);
console.log(chair);

// tipos de variables

//boolean
let testBoolean = true;
console.log(testBoolean);

//Number
let testNumber = 10;
console.log(testNumber);

//String
let testString = 'text';
console.log(testString);

//Tipos variables objetos
//Boolean
let testBooleanObject = new Boolean(true);
console.log(testBooleanObject);
//Number
let testNumberObject = new Number(10);
console.log(testNumberObject);
//String
let testStringObject = new String('text');
console.log(testStringObject);

//Concatenate variables
let PersonalName = "John";
let surname = "Doe";
let question = "How are you "+ PersonalName+" "+surname+"?";
console.log(question);

//E6 concatenate
let pname = "John";
let surname2 = "Doe";
let age = 23;
let question2 = `How old is ${pname} ${surname2}?`;
let answer = "he is "+age+" years old";
console.log(question2);
console.log(answer);

//concatenate using method string.concant(string)
let name2 = "John";
let surname3 = "Doe";
let question3 = "How are you ".concat(name2)+" ".concat(surname3)+"?";
console.log(question3);

//aritmetic operations
//sum, Rest, Multiplication or Division
let operator_a = 12;
let operator_b = 6;
let sum = operator_a + operator_b;
let rest = operator_a - operator_b;
let mult = operator_a * operator_b;
let division = operator_a / operator_b;
console.log(sum);
console.log(rest);
console.log(mult);
console.log(division);

// aritmethics operations II
//Exponentiation / increment / decrement
let operator_a2 = 3;
let operator_b2 = 3;
let expo = operator_a2 ** operator_b2;
let incr = ++operator_a2;
let decr = --operator_a2;
console.log(expo);
console.log(incr);
console.log(decr);

//Operadores de asignación
let x = 5;
let y = 6;
console.log(x+=5);
console.log(x-=5);
console.log(x*=5);
console.log(y/=2);

//typeof, null & undefinded
console.log(typeof(testBoolean));
console.log(typeof(testNumber));
console.log(typeof(testString));
console.log(typeof(testBooleanObject));

//typeof, null & undefinded II
let testNull = null;
console.log(typeof(testNull));

//typeof, null & undefinded III
let testUndefined;
console.log(testUndefined);

//Array
var fisrt_array = [];
var second_array = new Array(3);
var third_array = new Array(3,5);
var fourth_array = new Array(3,5,"sevilla", true, third_array);
console.log(fisrt_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);

//Array acces
console.log(third_array[1]);
console.log(fourth_array[2][0]);

//Array length
console.log(fourth_array.length);

//Array push
console.log(fourth_array.push("Spain"));
console.log(fourth_array);

//Array unshift
fourth_array.unshift(1);
console.log(fourth_array);

//For / For Each
for(var i = 0; i<fourth_array.length; i++){
    console.log("Entramos en la iteración de "+fourth_array[i]);
}

for(var i = fourth_array.length; i>=0;i--){
    console.log("Second iteration "+fourth_array[i]);
}

fourth_array.forEach(function(element){
    console.log("Fourth iteration "+element);
});

//if / else / elseif
let aux = 3;
if (aux > 0){
    console.log("This number is positive");
} else if(aux < 0){
    console.log("This number is negative");
} else {
    console.log("This number is 0");
}

//Regular expressions
var DNI_REGEX = /^(\d{8})([A-Z])$/;
let dni = "12345678K";
if(dni.match(DNI_REGEX)){
    console.log("Correct DNI");
} else {
    console.log("Incorrect DNI");
}

let today = new Date();
let fisrt_october= new Date(2022, 9, 1);
console.log(today);
console.log(fisrt_october);
console.log(today.getDay());

//Event Onclick buttons
function myfisrtFunction(){
    console.log("Thanks you for click.");
}

function mySecondFunction(){
    console.log("Thank u for ur interest")
}

// Select DOM
//var div1 = document.getElementById("my_div");
//div1.classList.add("my_class");
//console.log(div1);

// Select DOM II
var div = document.getElementsByTagName("div");
console.log(div);

var second_div = document.querySelector("#my_second_div");
console.log(second_div);

function $(selector){
    return document.querySelectorAll(selector);
}
console.log($("#my_third_div"));

//function types
var numbers = [1,2,3,4];
var n_elevator_2 = numbers.map(function(n){ return n*n;});
console.log(n_elevator_2);

var n_elevator_2 = numbers.map((n) => {return n*n;});
console.log(n_elevator_2);

var n_elevator_2 = numbers.map((n) => {console.log(n); return n*n;});
console.log(n_elevator_2);

let number2 = [[1,1],[2,2],[3,3],[4,4]];
let itself = number2.map(([x,y]) => x*y );
console.log(itself);

$("#btn").addEventListener("click", function(){
    var input = document.createElement("input");
    input.setAttribute("type","email");
    input.setAttribute("placeholder","E-mail");
    input.setAttribute("name","emails[]");
    $("#form").appendChild(input);
});

function bind_close(){
    let elements = document.querySelectorAll(".close");
    for(var i=elements.length-1;i>=0;i--){
        let el = elements[i];
        el.addEventListener("click", function(){
            this.parentNode.style.display = "none";
        });
    }
}

function $(selector){
    return document.querySelector(selector);
}

