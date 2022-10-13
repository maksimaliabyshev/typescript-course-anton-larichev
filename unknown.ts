export {};

let input: unknown;

input = 3;
input = ['abc', 'dfe'];

let res: string = input; //error

function run(i: unknown) {
    if (typeof i == 'number') {
        i++;
    } else {
        i;
    }
}
run(input);

async function getData() {
    try {
        await fetch('');
    } catch (error) {
        //type guard
        if (error instanceof Error) {
            console.log(error.message);
        }
        // casting type
        const e = error as Error;
        console.log(e.message);
    }
}

type U1 = unknown | number // all time unknown
type I1 = unknown & number // type number
