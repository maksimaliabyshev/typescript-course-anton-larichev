"use strict";
exports.__esModule = true;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 3] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 10] = "FAILED";
})(StatusCode || (StatusCode = {}));
var res = {
    message: 'Payment Success',
    statusCode: StatusCode.SUCCESS
};
// 1 - Success
// 2 - In progress
// 3 - Failed
if (res.statusCode === StatusCode.SUCCESS) {
}
// geteregination enum
var StatusCode2;
(function (StatusCode2) {
    StatusCode2[StatusCode2["SUCCESS"] = 1] = "SUCCESS";
    StatusCode2["IN_PROCESS"] = "p";
    StatusCode2["FAILED"] = "f";
})(StatusCode2 || (StatusCode2 = {}));
function action(status) { }
action(StatusCode2.SUCCESS);
action(1);
// action('p') // error
console.log('🚀 StatusCode2', StatusCode2);
// computed enums
function compute(prop) {
    return prop * 3;
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = 2] = "USER";
    Role[Role["ANON"] = compute(Role.USER)] = "ANON";
})(Role || (Role = {}));
console.log('🚀 Role', Role);
console.log('🚀 Role', Role['ANON'], Role.ANON);
console.log('🚀 Role', Role['6'], Role[6]);
function test(x) { }
test(Role);
console.log('\n', '🚀 const Role', 1 /* Role2.ADMIN */, 2 /* Role2.USER */);
