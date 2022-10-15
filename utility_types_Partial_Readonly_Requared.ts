export {};

interface User {
    name: string;
    age?: number;
    email: string;
}

type PartialType = Partial<User>; // all property maked optional
const p: PartialType = {};

type RequiredType = Required<User>; // all property maked non-optional
type ReadonlyType = Readonly<User>; // all property maked readonly

type RequairedAndReadonly = Required<Readonly<User>>;
