const s= 'Hello World';
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.substring(0,5));
console.log(s.split(''));

const numbers= new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ['apple', 'orange', 10 , true];
fruits[5] = 'graps';
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();//delete th last
console.log(Array.isArray(fruits));
console.log(fruits);
console.log(fruits.indexOf('apple'));