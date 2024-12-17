import { Employee } from './../../Dasar/src/Employee';
describe('Method Overriding', ()=>{
    class Employee{
        name: string;
        constructor(name:string){
            this.name = name
        }
        sayHello(name: string): string {
            return `Hello ${name}, my name is ${this.name}, im your employee`;
        }
    }

    class Manager extends Employee{
        sayHello(name: string): string {
            return `Halo ${name}, nama saya ${this.name}, aku manager mu`
        }
    }

    it('Should support method Overriding', () => {
        const employee = new Employee("Reff")
        employee.sayHello("Leafa")
        const manager = new Manager("Leafa")
        manager.sayHello("Aurora")
        
    })
})