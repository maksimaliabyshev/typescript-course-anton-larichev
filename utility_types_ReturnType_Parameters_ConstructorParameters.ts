export {};

class User {
    constructor(public id: number, public name: string) {}
}

function getData(id: number) {
    return new User(id, 'Vasya');
}

type RT = ReturnType<typeof getData>; // return type User
type RT2 = ReturnType<() => void>; // type RT2 = void
type RT3 = ReturnType<<T>() => T>; // type RT3 = unknown, because T not defined
type RT4 = ReturnType<<T extends string>() => T>; // type RT4 = string

type PT = Parameters<typeof getData>; // return tuple of type parameters
type first = Parameters<typeof getData>[0]; // return first index type from tuple type
type first2 = PT[0]; // return first index tuple type

type CP = ConstructorParameters<typeof User> // return tuple of class parameters

type IT = InstanceType<typeof User>