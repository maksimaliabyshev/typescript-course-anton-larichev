export {};

let strOrNum: string | number;
if (Math.random() > 0.5) {
    strOrNum = 5;
} else {
    strOrNum = 'str';
}

if (typeof strOrNum === 'string') {
    console.log(strOrNum); //string
} else {
    console.log(strOrNum); //number
}

//-----------------------
let strOrNum2: typeof strOrNum; // type string | number

const user = {
    name: 'Vasya',
    age: 30,
};

type keyOfUser = keyof typeof user;

//-----------------------
enum Direction {
    Up,
    Down,
}

type d = keyof typeof Direction;