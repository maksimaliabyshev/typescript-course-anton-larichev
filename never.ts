export {};

function generateError(message: string): never {
    throw new Error(message);
}

function dumpError(): never {
    while (true) {}
    // return '' //error
}

function rec(): never {
    return rec();
}

const a: never = undefined; //error
const b: void = undefined;

type paymentAction = 'refund' | 'checkout' | 'reject';
function processAction(action: paymentAction) {
    switch (action) {
        case 'refund':
            //...
            break;
        case 'checkout':
            //...
            break;
        // case 'reject':
        //     //...
        //     break;

        default: // check 'reject'
            const _: never = action;
            throw new Error('Нет такого action');
    }
}

function isString(x: string | number): boolean {
    if (typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false;
    }
    // исчерпывающая проверка типов
    generateError('sdsdsd'); // return never
}
