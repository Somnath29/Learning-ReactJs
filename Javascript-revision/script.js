// console.log("hello");

// alert("hello :)");


// **can declare and update

// var a = 20;
// console.log(a);
// a = 9; // updating the value 
// console.log(a);
// var a = 8; // redeclaring 
// console.log(a);





// // **can't redeclare and can't update 
// const a = 20;
// console.log(a);
// a = 9; // updating the value 
// console.log(a);
// const a = 8; // redeclaring 
// console.log(a);





// **can't redeclare and but can be updated 

// let a = 20;
// console.log(a);
// a = 9; // updating the value 
// console.log(a);
// // let a = 8; // redeclaring 
// // console.log(a);





// block scope

// {
//     var a = 9; //globally accessible 
// }
// console.log(a);


// {
//     let a = 9; // within block scope
//     console.log(a);
// }





// adding 2 nos. using func in js

// function add(){
//     var a = 9;
//     var b = 10;
//     var sum = a+b;
//     console.log(sum);
// }

// add();




// const sum = function (a,b){
//     return a+b;
// };

// console.log(sum(30,40));



// using arrow function 


// const sum = (a, b) => {
//     return a + b;
// };

// console.log(sum(30, 40));


// const sum = (a,b)=> a+b;
// console.log(sum(30,40));


// const sum = a=> a;
// console.log(sum(30));












// // calculator using arrow 
// // cheack later 

// function calculator(a, b, operator) {
//     switch (operator) {
//         case "+":
//             return a + b;

//         case "-":
//             return a - b;

//         case "*":
//             return a * b;

//         case "/":
//             return a / b;

//         default:
//             return "Invalid operator";
//     }
// }

// console.log(calculator(10, 5, "+"));
// console.log(calculator(10, 5, "*")); 


// // my code :-
// const cal = (a,b) =>{
//     var choice = '+';
//     switch(choice){
//         case '+': console.log(cal(4,3));
//         case '-': console.log(cal(4,3));
//         case '*': console.log(cal(4,3));
//         case '/': console.log(cal(4,3));
//     }
// }


// const sum = (a,b)=> a+b;
// console.log(sum(4,3));

// const sub = (a,b)=> a-b;
// console.log(sub(4,3));













// array 

// let marks = [1,2,3,4,5];
// console.log(marks);

// for each loop - we don't make the new array
// when i want to perform an action to each elem in array 

// marks.forEach(function(mark){
//     console.log(mark);
// });






// let fruits = ["apple", "mango", "kiwi", "grapes","watermelon"];

// fruits.forEach(function(fruits){
    //     console.log(fruits);
    // }
    // )
    




// using arrow function 
// let fruits = ["apple", "mango", "kiwi", "grapes", "watermelon"];

// // fruits.forEach((fruit) => {
// //     console.log(fruit);
// // });

// fruits.forEach((fruit) => console.log(fruit));




// indexing  using for each 

// let fruits = ["apple", "mango", "kiwi", "grapes", "watermelon"];
// fruits.forEach((fruit,i) => console.log(fruit,i));







// using map

// let fruits = ["apple", "mango", "kiwi", "grapes", "watermelon"];

// let result = fruits.map((fruit, index) => {
//     return index + " : " + fruit;
// });

// console.log(result);



// let marks = [1, 2, 3, 4];

// let newMarks = marks.map((mark) => {
//     return mark + 5;
// });

// console.log(newMarks);



// diff btw map and for each

// for each - perform an action on elem 
//map  we transform the entire array

// for each - no new array 
// map - new array is made







// filter()

// filter() is used when you want to select certain elements from an array based on a condition.
// new array is amde
// map() → transforms elements
// filter() → selects elements

// let nums = [100, 20, 32, 14, 59, 60];

// let finalMarks = nums.filter((num) => num > 50);

// console.log(finalMarks);






// reduce() - takes many vakls and reduce it to single val
// no new array 

// synxtax
// let result = arr.reduce((accumulator, element) => {
//     return accumulator + element;
// }, initialValue);


// example

// let marks = [1,2,3,4,5];
// let total = marks.reduce((sum,mark)=>{
//     return sum+mark;
// });

// console.log(total);




// array destructuring  - unpacking vals of array into different variables 

// let marks = [1,2,3,4,5];
// let[m1,,m3,m4,m5] = marks;
// console.log(m1);
// console.log(m2);
// console.log(m3);
// console.log(m4);
// console.log(m5);






// let marks = [1,2,8];
// let[m1,m2,m3=9] = marks;
// console.log(m1);
// console.log(m2);
// console.log(m3);







// spread operator 
// The spread operator ... is used to spread/unpack the elements of an array or the properties of an object.

//The spread operator does not change the original array when you use it to create a new array.



// let students = ["aman", "ram","sham"];
// students.push("sam");
// console.log(students);


// let students = ["aman", "ram","sham"];
// let newStudents = [...students, "sam"];
// console.log(students);
// console.log(newStudents);

// let fruits = ["apple","mango ","grapes","kiwi","banana"];
// let newFruits = [...fruits , "papaya"];
// console.log(fruits);
// console.log(newFruits);


// rest - used in function , don't know how many args wil be passed 
// rest - collect vals 
// rest - on receiving side
// spread - used in array and ovjecs , expland vals 
// spread - unpack vals , rest - collect vals 



// rest 

// let numbers = [10,20,30];
// console.log(...numbers);


function sum(...number){
    console.log(number);
}

console.log(sum(10,20,30));

// undefined - cz function does'nt return anything at end 