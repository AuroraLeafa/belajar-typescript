import { Employee } from '../src/Employee';
import { Seller } from './../src/seller_interface';

describe('interface', () => { 
    it('Should must declare', () => {
        const seller: Seller = {
            id: "1",
            name: "Reff",
            npwp: "1234567890",
            nik: "1234567890"
        }
        console.info(seller)
        seller.id = "2"
        // Seller.nik and npwp should not be overwrited (give error)
        seller.npwp = "0987654321"
        seller.nik = "0987654321"
        console.info(seller)
    })

    it('Should must support function interface', () => {
     interface addFunction {
         (a: number, b: number): number
     }
     const add: addFunction = (a, b) => {
         return a + b
     }
     expect(add(1, 2)).toBe(3)
    })

    it('Should must support indexable interface for number index', () => {
     interface indexable {
         [index: number] : string
     }
     const array: indexable = ["Reff", "Reffan"]
     expect(array[0]).toBe("Reff")
    })
    
    it('Should must support indexable interface for string index', () => {
     interface indexableStr {
         [key: string]: string
     }
     const obj: indexableStr = {
         name: "Reff",
         age: "20"
     }
     expect(obj["name"]).toBe("Reff")
    })

    it('Should must support extendable interface', () => {
    interface Manager extends Employee{
        total_employeers: number
    }
    const manager: Manager = {
        id: "1",
        name: "Reff",
        division: "IT",
        total_employeers: 10
    }
    expect(manager.total_employeers).toBe(10)
    expect(manager.name).toBe("Reff")
    expect(manager.division).toBe("IT")
    })

    it('Should must support function interface', () => {
     interface Person {
         name: string
         sayHello(name: string): string
     }

     const person: Person = {
         name: "Reff",
         sayHello: function (name: string):string {
             return `Hello ${name} , my name is ${this.name}`
         }
        }
        expect(person.sayHello("Reffan")).toBe("Hello Reffan , my name is Reff")
    })

    it('Should must support intersection types', () => {
        interface HasId {
            id: number
        }
        interface HasName {
            name: string
        }
        type Domain = HasId & HasName
        const domain: Domain = {
            id: 1,
            name: "Reff"
        }
        expect(domain.id).toBe(1)
        expect(domain.name).toBe("Reff")
        console.info(domain)
    })
 })