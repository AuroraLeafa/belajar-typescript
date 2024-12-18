describe('Abstraction in OOP', () => { 
    abstract class Customer {
        readonly id: number
        abstract name: string

        constructor(id:number){
            this.id = id
        }

        hello(){
            console.log(`Hello ${this.name}`)
        }

        abstract sayHello(name: string): void
    }

    class RegCustomer extends Customer {
        name: string;

        constructor(id: number, name: string) {
            super(id);
            this.name = name;
        }

        sayHello(name: string): void {
            console.log(`Hello ${name}, my name is ${this.name}`);
        }
    }

    it('Should support abstract class', () => {
        const customer = new RegCustomer(1, "Reff")
        customer.sayHello("Leafa")
    })
 })