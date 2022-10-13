export {};

class UserService {
	// static name: string = 'asdadasd' // conflict Function.name
    private id: number;
    private static db: any;

    constructor(id: number) { 
        this.id = id;
    }

    // static block
    static {
		// async not work
        UserService.db = {};
        UserService.db.findById = (id: number) => {
            return id;
        };
    }

    static async getUser(id: number) {
        return UserService.db.findById(id);
    }
    create() {
        UserService.db;
    }
}

UserService.getUser(1);

const instance = new UserService(1);
instance.create();
