function createPerson(firstName, lastName) {
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get fullName() {
            return this.firstName + ' ' + this.lastName;
        }
        set fullName(fullName) {
            let splittedFullName = fullName.split(' ');
            this.firstName = splittedFullName[0];
            this.lastName = splittedFullName[1];
        }
    }
    return new Person(firstName, lastName);
}

let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName= 'Ivan Ivanov';
console.log(person.fullName);
