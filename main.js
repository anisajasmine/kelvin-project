// Defining Kelvin
const kelvin = 293;

// Calculating Celsius from Kelvin
const celsius = kelvin - 273;

// Calculating Fahrenheit from Celsius
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

// Logging results
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
