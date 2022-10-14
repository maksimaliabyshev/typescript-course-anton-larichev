export {};

interface IUser {
    name: string;
    age: number;
}
type KeysOfUser = keyof IUser;

const key: KeysOfUser = 'age'; // or 'name'

//------------------
function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
// or
function getValue2<T>(obj: T, key: keyof T) {
    return obj[key];
}

const user: IUser = {
    name: 'Vasya',
    age: 30,
};

const userName = getValue(user, 'name');
const userName2 = getValue2(user, 'name');
