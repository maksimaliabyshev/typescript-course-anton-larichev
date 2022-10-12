export {};

interface User {
    name: string;
}

interface User {
    age: number;
}

const user: User  = {
	name: 'as',
	age: 33
}

type ID = number | string;
interface IDs {
    ID: number | string;
}