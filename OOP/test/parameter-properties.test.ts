describe('Parameter Properties', () => {
    class Person {
        constructor(public name:string){}
    }

    it('Should support parameter properties', () => {
        const person = new Person("Reff");
        expect(person.name).toBe("Reff")
        console.info(person);
    })

})