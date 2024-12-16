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

    it('Should support rest parameter', () => {
        const sum = (...numbers: number[]) :number => {
            return numbers.reduce((a, b) => a + b)
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15)
    })

    it('Should support optional parameter', () => {
        const sayHello = (firstName: string = "Guest", lastName?: string) :string => {
            return lastName ? `Hello ${firstName} ${lastName}` : `Hello ${firstName}`
        }
        expect(sayHello("Reff")).toBe("Hello Reff")
        expect(sayHello("Reff", "Reffan")).toBe("Hello Reff Reffan")
    })

    it('Should support Overloading parameter', () => {
        function callMe(value: string): string;
        function callMe(value: number): number;
        function callMe(value: any){
            if(typeof value === "string"){
                return `Hello ${value}`
            } else if(typeof value === "number"){
                return value + 5
            } else  {
                return value
            }
        }
        expect(callMe("Reff")).toBe("Hello Reff")
        expect(callMe(5)).toBe(10)
    })

    it('should support function parameter', () =>{
        const sayHello = (name: string, callback: (name: string) => void) :string => {
            return `Hello ${callback(name)}`
        }
        const toUpper = (name: string) :string => {
            return name.toUpperCase()
        }
        expect(sayHello("Reff", toUpper)).toBe("Hello REFF")
    
        //Support Anonymous Function
        expect(sayHello("reff", (name: string) => name.toUpperCase())).toBe("Hello REFF")
    })


 })