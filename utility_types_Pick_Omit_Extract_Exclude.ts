export {};

interface PaymentPersistend {
    id: number;
    sum: number;
    from: string;
    to: string;
}

type Payment = Omit<PaymentPersistend, 'id'>; // remove property 'id' in type
type Payment2 = Pick<PaymentPersistend, 'from' | 'to'>; // pick needet property in type

type ExtractExample = Extract<'from' | 'to' | Payment, string>; // type 'from' | 'to'
type ExcludeExample = Exclude<'from' | 'to' | Payment, string>; // type Payment
