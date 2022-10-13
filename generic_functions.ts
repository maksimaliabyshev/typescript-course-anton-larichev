export {};

function logMiddware<T>(data: T): T {
    console.log(data);
    return data;
}

const res = logMiddware(10);
const res2 = logMiddware<string>('abc');

function getSplitedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2;
    return data.splice(0, l);
}

getSplitedHalf([1,2,3,'a','b','c'])
getSplitedHalf<number>([1,2,3])