export {};

const skill: [number, string] = [1, 'Dev'];

const [id, skillName] = skill;

const arr: [number, string, ...boolean[]] = [1, 'aaa', true, false, false];

const tupleReadOnly: readonly [number, string] = [1, 'Dev'];
// tupleReadOnly[1] = 'DevOps' // error
const arrayReadOnly: readonly string[] = ['Tester', 'Dev'];
const arrayReadOnly2: ReadonlyArray<string> = ['Tester', 'Dev'];
