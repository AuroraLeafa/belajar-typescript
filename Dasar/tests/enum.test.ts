import { Customer, customerType } from "../src/enum";

describe('enum', () => { 
    it('Should must declare', () => {
        const customer: Customer = {
            id: "1",
            name: "Reff",
            type: customerType.Gold
        }

        console.info(customer)
        
    })
 })