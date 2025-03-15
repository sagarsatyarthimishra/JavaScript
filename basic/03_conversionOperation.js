let score = undefined;

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score); // type conversion string to number
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33ass" => NaN
// true => 1; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.table([isLoggedIn,booleanIsLoggedIn,typeof(booleanIsLoggedIn)])

// 1 => true; 0 => false
//"" => false

let someNumber = 33;
let stringSomeNumber = String(someNumber);
console.table([,someNumber,stringSomeNumber,typeof(stringSomeNumber)]);

