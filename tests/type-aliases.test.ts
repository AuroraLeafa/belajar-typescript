import { Category, Product } from "../src/type-alias";

describe('Type Alias', () => { 
    it('Should must declare', () => {
        const category: Category = {
            id: "1",
            name: "SmartPhone",
        };
        const product: Product = {
            id: "1",
            name: "POCO F10 Pro Max",
            price: 1000,
            category: category,
            description: "Smartphone from Poco"
        };

        console.info(category)
        console.info(product)
    })
 })