export {};

enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = 3,
    FAILED = 10,
}

const res = {
    message: 'Payment Success',
    statusCode: StatusCode.SUCCESS,
};

// 1 - Success
// 2 - In progress
// 3 - Failed

if (res.statusCode === StatusCode.SUCCESS) {
}

// geteregination enum
enum StatusCode2 {
    SUCCESS = 1,
    IN_PROCESS = 'p',
    FAILED = 'f',
}
function action(status: StatusCode2) {}
action(StatusCode2.SUCCESS);
action(1);
// action('p') // error
console.log('🚀 StatusCode2', StatusCode2);

// computed enums
function compute(prop: number) {
    return prop * 3;
}
enum Role {
    ADMIN = 1,
    USER = ADMIN * 2,
    ANON = compute(USER),
}
console.log('🚀 Role', Role);
console.log('🚀 Role', Role['ANON'], Role.ANON);
console.log('🚀 Role', Role['6'], Role[6]);

function test(x: { ADMIN: number; USER: number | string }) {}
test(Role);

// constant enums
const enum Role2 {
    ADMIN = 1,
    USER,
}
console.log('\n', '🚀 const Role', Role2.ADMIN, Role2.USER);
