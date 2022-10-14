export {};

const a: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPResponse<T extends 'success' | 'failed'> {
    code: number;
    data: T extends 'success' ? string : Error;
    data2?: T extends 'success' ? string : number;
}

const suc: HTTPResponse<'success'> = {
    code: 200,
    data: 'done',
};
const err: HTTPResponse<'failed'> = {
    code: 500,
    data: new Error(),
};

//-----------------
class User {
    id: number;
    name: string;
}
class UserPersistent extends User {
    dbId: string;
}

function getUser(id: number): User;
function getUser(DbId: string): UserPersistent;
function getUser(idOrDbId: string | number): User | UserPersistent {
    if (typeof idOrDbId === 'number') {
        return new User();
    } else {
        return new UserPersistent();
    }
}

//or conditional type
type UserOrUserPersistent<T extends string | number> = T extends number
    ? User
    : UserPersistent;

function getUser2<T extends string | number>(id: T): UserOrUserPersistent<T> {
    if (typeof id === 'number') {
        return new User() as UserOrUserPersistent<T>;
    } else {
        return new UserPersistent() as UserOrUserPersistent<T>;
    }
}

const res = getUser2(1); // User
const res2 = getUser2('str'); // UserPersistent
