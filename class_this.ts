export {};

class Payment {
    private date: Date = new Date();

    //compare context
    getDate(this: Payment) {
        return this.date;
    }
    //arrow bind context
    getDateArrow = () => {
        return this.date;
    };
}

const p = new Payment();

const user = {
    id: 1,
    paymentDate: p.getDate,
    paymentDateArrow: p.getDateArrow,
};

console.log(p.getDate());
console.log(user.paymentDate()); //error loss of context
console.log(user.paymentDateArrow());

class PersistentPayment extends Payment {
	save() {
		// return super.getDate()  //work
		// return super.getDateArrow(); //error
		return this.getDateArrow(); //work
	}
}

console.log(new PersistentPayment().save())