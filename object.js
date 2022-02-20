const person = {
    name: 'jan',
    family: 'Dao',
    age : 34 ,
    hobbies: ['sports', 'movies'],
    address: {
        postcode: '09123',
        city: 'Chemnitz'
    }
}

console.log(person);
const {name , family, address : {city}} = person;
console.log(name, city);

person.email = 'negin@gmail.com';


const todos=[
    {
        id:1,
        name:'Go to bus'
    },
    {
        id:2,
        name: 'Take a meeting'
    }
];

const todosJSON= JSON.stringify(todos);

console.log(todosJSON);

let i=0;
while(i<10) {
    console.log(i);
    i++;
}

todos.forEach(function(todo){
    console.log(todo.name)
})

function add(num1=1, num2=2) {
    console.log(num1+num2)
}
add();
