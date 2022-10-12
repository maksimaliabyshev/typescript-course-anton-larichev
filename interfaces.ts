export {};

interface User {
    name: string;
    age: number;
    skills: string[];

    log: (id: number) => string;
}
interface Role {
    roleId: number;
}
interface UserWithRole extends User, Role {
    createdAt: Date;
}

// interface User = type User2
type User2 = {
    name: string;
    age: number;
    skills: string[];

    log: (id: number) => string;
};

let user: UserWithRole = {
    name: 'piter',
    age: 33,
    skills: ['a', 'b'],
    roleId: 1,
    createdAt: new Date(),

    log(id) {
        return '';
    },
};

// indexed property
interface UserDic {
    [index: number]: User;
}
type UserDic2 = {
    [index: number]: User;
};
type UserDic3 = Record<number, User>;
