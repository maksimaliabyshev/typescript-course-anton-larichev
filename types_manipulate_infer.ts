export {};

function runTransaction(transaction: { fromTo: [string, string] }) {
    console.log();
}

const transaction: GetFirsArg<typeof runTransaction> = {
    fromTo: ['1', '2'], //as [string, string],
};

runTransaction(transaction);

type GetFirsArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never;
