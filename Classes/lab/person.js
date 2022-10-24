class Person {
    
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

console.log(new Person('Nikola', 'Anastasov', 34, 'kokovtbg@gmal.com').toString())