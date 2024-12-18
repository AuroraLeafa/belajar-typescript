import { Employee } from './../../Dasar/src/Employee';
describe('Method Overriding', ()=>{
    class Employee{
        name: string;
        constructor(name:string){
            this.name = name
        }
        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}, im your employee`);
        }
    }

    class Manager extends Employee{
        sayHello(name: string): void {
            super.sayHello(name);
            console.info(`And i'm your Manager`);
        }
    }

    it('Should support method Overriding', () => {
        const employee = new Employee("Reff")
        employee.sayHello("Leafa")
        const manager = new Manager("Leafa")
        manager.sayHello("Aurora")
    })
})