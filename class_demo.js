function Person(firstname , lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return  this.dob.getFullYear();
    }
}
const person1 = new Person('negin' , 'kheradmandian', '09/06/1987');
console.log(person1.getBirthYear());