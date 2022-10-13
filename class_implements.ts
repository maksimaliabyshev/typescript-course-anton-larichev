export {};

interface ILogger {
    log(...args: any[]): void;
    error(...args: any[]): void;
}

class Logger implements ILogger {
    log(...args: any[]): void {
        console.log(...args);
    }
    async error(...args: any[]): Promise<void> {
        // request to external system
        console.log(...args);
    }
}

interface IPayable {
    pay(paymentId: number): void;
    price?: number;
}
interface IDeletable {
    delete(): void;
}
// имплементация класса должна быть шире имплементации интерфейса
class User implements IPayable, IDeletable {
	pay(paymentId: number | string): void {
		///
	}
	delete(): void {
		///
	}

}
