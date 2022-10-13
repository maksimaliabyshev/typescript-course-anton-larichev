export {};

class Vehicle {
    public make: string;
    private damages: string[] = [];
    private _model: string;
    protected run: number;
    #price: number = 0;

    addDamage(damage: string) {
        this.damages.push(damage);
        this.#price += 100;
        return this;
    }

    get model() {
        return this._model;
    }
    set model(m) {
        this._model = m;
    }

    isPriceEqual(v: Vehicle) {
        return this.#price === v.#price;
    }
}

class EuroTruck extends Vehicle {
    setRun(km: number) {
        this.run = km / 0.62; // protected
        // this.damages; // error
    }
}
const v = new Vehicle().addDamage('bumper');
console.log(v);

const et = new EuroTruck();
console.log(et);
