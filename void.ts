export {};

function logId(id: string | number): void {
    console.log(id);
}
const a = logId(1);

function multiplay(f: number, s?: number) {
    if (!s) {
        return f * f;
    }
    // return f * s;
}

type voidFunc = () => void;

const f1: voidFunc = () => {};
const f2: voidFunc = () => {
    return true;
};

const b = f2(); //return void

const skills = ['Dev', 'DevOps']
const user = {
	s: ['s']
}
skills.forEach((skill) => user.s.push(skill))