export {};

const skills: string[] = ['Dev', 'DevOps', 'Testing', 'Couch'];
const skills2: Array<string> = ['Dev', 'DevOps', 'Testing', 'Couch'];

for (const skill of skills) {
    console.log('skill:', skill.toLocaleLowerCase());
}

const res = skills
    .filter((s) => s !== 'DevOps')
    .map((s) => 1)
    .reduce((a, b) => a + b);

console.log(res);
