export {};

type Modifier = 'read' | 'update' | 'create';

type UserRoles = {
    customers?: Modifier;
    projects?: Modifier;
    adminPanel?: Modifier;
};

// type userAccess = {
//     customers?: boolean;
//     projects?: boolean;
//     adminPanel?: boolean;
// };

type ModifierToAccess<Type> = {
    [prop in keyof Type]: boolean;
};
type ModifierToAccess2<Type> = {
    [prop in keyof Type]+?: boolean; // '-?' all properties are not required
};
type ModifierToAccess3<Type> = {
    [prop in keyof Type]-?: boolean; // '-?' - all properties are required
};
type ModifierToAccess4<Type> = {
    +readonly [prop in keyof Type]-?: boolean;
};
type ModifierToAccess5<Type> = {
    +readonly [prop in keyof Type as `canAccess${string & prop}`]-?: boolean;
};
type ModifierToAccess6<Type> = {
    +readonly [prop in keyof Type as Exclude<`canAccess${string & prop}`, 'canAccessadminPanel'>]-?: boolean;
};

type userAccess = ModifierToAccess<UserRoles>;
type userAccess2 = ModifierToAccess2<UserRoles>;
type userAccess3 = ModifierToAccess3<UserRoles>;
type userAccess4 = ModifierToAccess4<UserRoles>;
type userAccess5 = ModifierToAccess5<UserRoles>;
type userAccess6 = ModifierToAccess6<UserRoles>;
