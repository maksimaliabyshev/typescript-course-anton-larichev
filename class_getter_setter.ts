export {};

class User {
    private _login: string;
    private _password: string;

    public get login() {
        return this._login;
    }
    public set login(l: string | number) {
        this._login = 'user-' + l;
    }
	async getPassword(p: string){}
}

const user = new User();
user.login = 'myLogin';
console.log(user)
