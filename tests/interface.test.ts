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
 })