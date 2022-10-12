export {};

const arr = [1, 'str'];

function logId(id: string | number | boolean) {
    //type guard
    if (typeof id === 'string') {
        console.log(id);
        //type guard
    } else if (typeof id === 'number') {
        console.log(id);
    } else {
        console.log(id);
    }
}

logId(1);
logId('abcdef');

function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
    console.log(err);
}
function logObject(obj: { a: number } | { b: number }) {
    if ('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}

function logMultipleIds(a: string | number, b: string | boolean) {
    if (a === b) {
        console.log(a, b); // intersection types
    } else {
        console.log(a);
    }
}

// literals types
const a = 1; // type literal 1
let b: 1 | 2 = 1;
b = 3; // error