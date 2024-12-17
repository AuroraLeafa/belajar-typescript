describe('Class', () => {
    class Customer {
        readonly id: string;
        name: string = "Guest";
        age?: number = 18;
    
        constructor(id: string, name: string) {
            this.id = id;
            this.name = name;
        }

        sayHello(name: string): string {
            return `Hello ${name}, my name is ${this.name}`;
        }
    }

    it("should support properties", () => {
        const customer = new Customer("1", "Reff");
        customer.age = 20;
        console.info(customer);
        console.info(customer.id);
        console.info(customer.name);
        console.info(customer.age);
        expect(customer.age).toBe(20);
    })

    it("should support method", () => {
        const customer = new Customer("1", "Otong");
        console.info(customer.sayHello("Refan"));
        expect(customer.sayHello("Refan")).toBe("Hello Refan, my name is Otong");
    })
})