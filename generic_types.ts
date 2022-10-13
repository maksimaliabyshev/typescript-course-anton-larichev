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

getSplitedHalf([1, 2, 3, 'a', 'b', 'c']);
getSplitedHalf<number>([1, 2, 3]);

//-------------------
const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;
const split2: <Y>(daYa: Array<Y>) => Array<Y> = getSplitedHalf;

interface ILogLine<T> {
    timeStamp: Date;
    data: T;
}
const logLine: ILogLine<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1,
    },
};

type LongLineType<T> = {
    timeStamp: Date;
    data: T;
};
const logLine2: LongLineType<{ a: number }> = {
    timeStamp: new Date(),
    data: {
        a: 1,
    },
};