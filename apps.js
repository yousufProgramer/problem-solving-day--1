/////// ak object er value onno arekti object e pass kora and new value add kora

// const person = {
//     fastName : 'Yousuf',
//     lastName : 'Ahmed',
//     age : 20,
// }
// delete person.age;
// const modifiObj = Object.assign({
//     job : 'javascript',
//     city : 'sirajganj'

// },person);
// console.log(person)

//////// funtion sum number and avarge number

function sum(a,b){
    return a + b;
}
console.log(sum(10,20))

///// avarge number

function avargeNumber (x,y,z,w){
    return (x + y + z + w) / arguments.length;
}
console.log(avargeNumber(10,20,30,40));

///// array ar vitor thakhe kone value print kora

const myArray = [
    1,
    5,
    714,
    { name: "meer sagor", age: 20 },
  
    [545, 55, ["arrays", { name: "maruf", skill: ["js", "html", "css"] }]],
  
    545,
    "asdf",
  ];

const result = myArray[4][2][1].skill[2];
console.log(result)








