interface User {
    login: string;
    password?: string; // password: string | undefined;
}

const user: User = {
	login: 'a@mail.com',
	password: '1'
}

function multiply(first: number, second?: number): number {
	if (!second) {
		return first * first;
	}
	return first * second
}
multiply(5)

interface UserPro {
    login: string;
    password?: {
		type: 'primary' | 'secondary'
	}
}


function testPass (user: UserPro) {
    const t1 = user.password?.type; // optional chaining
    const t2 = user.password!.type; // non-null assertion
}
function test(params?: string) {
    const t = params ?? multiply(2); // non-null assertion, if params non null, non undefiled
	console.log(t)
}
test('')