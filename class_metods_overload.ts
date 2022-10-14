export {};

class User {
    skills: string[];

    addSkill(skill: string): void;
    addSkill(skills: string[]): void;
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills == 'string') {
            this.skills.push(skillOrSkills);
        }
        if (Array.isArray(skillOrSkills)) {
            this.skills.concat(skillOrSkills);
        }
    }
}

new User().addSkill('Dev');
new User().addSkill(['Dev', 'DevOps']);
