export {};

let a = 5;
let b: string = a.toString();

let c = 'sdsd';
let d: number = parseInt(c); // NaN

let e = new String(a); // type String
let e2 = new String(a).valueOf(); // type string

let f = new Boolean(a); // type Boolean
let f2 = new Boolean(a).valueOf(); // type boolean

interface User {
    name: string;
    email: string;
    login: string;
}
const user = {
    name: 'Vasya',
    email: 'vasya@mail.com',
    login: 'vasia',
} as User;

// not recomended type casting
const user2 = <User>{
    name: 'Vasya',
    email: 'vasya@mail.com',
    login: 'vasia',
};

interface Admin {
    name: string;
    role: number;
}
// not recommendet
const admin: Admin = {
    ...user,
    role: 1,
};

function userToAdmin(user: User): Admin {
	return {
		name: user.name,
		role:1
	}
}