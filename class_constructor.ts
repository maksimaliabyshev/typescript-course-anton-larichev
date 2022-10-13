export {};

class User {
    name: string;
    age: number;

    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);
    constructor(ageOrNumber?: string | number, age?: number) {
        if (typeof ageOrNumber === 'string') {
            this.name = ageOrNumber;
        } else if (typeof ageOrNumber === 'number') {
            this.age = ageOrNumber;
        }

        if (typeof age === 'number') {
            this.age = age;
        }
    }
}

const user = new User();
const user2 = new User('Vasya');
const user3 = new User(33);
const user4 = new User('Vasya', 33);
