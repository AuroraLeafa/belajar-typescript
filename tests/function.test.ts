describe('Function', () => { 
    it('Should must declare', () => {
        const sayHello = (name: string) :string => {
            return `Hello ${name}`
        }
        expect(sayHello("Reff")).toBe("Hello Reff")

        const myName = (name: string) :void => {
            console.info(`Nama Saya ${name}`)
        }
        myName("Reff")
    })
 })