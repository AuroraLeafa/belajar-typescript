describe('interface', () => {
    interface HasName {
        name: string;
    }
    interface CanSayHello {
        sayHello(name: string): void;
    }

    class Person implements HasName, CanSayHello {
        name: string;

        constructor(name: string){
            this.name = name
        }
    
        sayHello(name: string): string {
            return(`Halo ${name}, nama saya ${this.name}`)
        }
    }

    it('Should support inheritance', () => {
        const person = new Person("Reff")
        expect(person.sayHello("Leafa")).toBe('Halo Leafa, nama saya Reff')
        console.log(person.sayHello("Leafa"));
    })
})