export {};

interface Role {
    name: string;
}
interface Permission {
    endDate: Date;
}

interface User {
    name: string;
    roles: Role[];
    permission: Permission;
}

const user: User = {
    name: 'Vasya',
    roles: [],
    permission: {
        endDate: new Date(),
    },
};

const nameUser = user['name']; // work with object
const roleNames = 'roles'; // literal string
let roleNames2: 'roles' = 'roles'; // literal string

type rolesType = User['roles']; // work with type
// type rolesType2 = User[roleNames]; //error
type rolesType3 = User[typeof roleNames]; //convert string to type
type rolesType4 = User[typeof roleNames2];

type roleType = User['roles'][number]; // type User['roles'] = Role[], User['roles'][number] = Role
type dateType = User['permission']['endDate']; 

//-------------------
const roles = ['admin', 'user', 'super-user'] as const; // convert type object to type readonly object
type roleTypes = typeof roles[number]; // union type "admin" | "user" | "super-user"
