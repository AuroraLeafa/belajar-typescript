describe('Polymorphism', () => {
    class Employee{
        constructor(public name: string){}
    }
    class Manager extends Employee{}
    class VicePresident extends Manager{}

    const sayHello = (employee: Employee): void => {
        if(employee instanceof VicePresident){
            const vp = employee as VicePresident 
            console.log(`Hello VP ${vp.name}`);
        }else if(employee instanceof Manager){
            const manager = employee as Manager
            console.log(`Hello Manager ${manager.name}`);
        }else{
            console.log(`Hello Employee ${employee.name}`);
        }
    }

    it('should support polymorphism', () => {
        let employee = new Employee("Reff")
        console.log(employee.name);

        employee = new Manager("Leafa")
        console.log(employee.name);
        
        employee = new VicePresident("Aurora")
        console.log(employee.name);
    })

    it('Should support method parameter polymorphism', () => {
        sayHello(new Employee("Reff"))
        sayHello(new Manager("Leafa"))
        sayHello(new VicePresident("Aurora"))
    })
})