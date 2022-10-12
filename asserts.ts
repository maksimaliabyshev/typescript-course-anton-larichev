export {};

interface User {
    name: string;
}
function assertUser(obj: unknown): asserts obj is User {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    }
    throw new Error('Not is User');
}

const a = {};
// if (assertUser(a)) {
// 	a.name = 'Vasya'
// }
assertUser(a);
a.name = 'Vasya';
