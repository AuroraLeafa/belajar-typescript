describe("Inheritence", () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {}
    class Director extends Manager {}

    it("Should support Inheritence", () => {
        const employee = new Employee("Reff");
        console.info(employee.name);
        const manager = new Manager("Leafa");
        console.info(manager.name);
        const director = new Director("Aurora");
        console.info(director.name);
    })


});
