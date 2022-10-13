export {};

type Constructor = new (...args: any[]) => {};
// constraint constructor
type GConstructor<T = {}> = new (...args: any[]) => T;

class List {
    constructor(public items: string[]) {}
}
class Accordion {
    isOpened: boolean;
}

type ListType = GConstructor<List>;
type AccordionType = GConstructor<Accordion>;

// inheritense class
class ExtendedListClass extends List {
    first() {
        return this.items[0];
    }
}

// mixin
function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
    return class ExtendedList extends Base {
        first() {
            this.isOpened;
            return this.items[0];
        }
    };
}

class AccordionList {
    isOpened: boolean;
    constructor(public items: string[]) {}
}

const list = ExtendedList(AccordionList);
const res = new list(['1', '2']);
console.log(res.first());
