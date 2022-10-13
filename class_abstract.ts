export {};

abstract class Controller {
    abstract handle(req: any): void;

    handleWitchLogs(req: any) {
        console.log('start');
        this.handle(req);
        console.log('end');
    }
}

class UserController extends Controller {
    handle(req: any): void {
        console.log(req);
    }
}

// new Controller() //error
const c = new UserController();
c.handleWitchLogs('Request');
