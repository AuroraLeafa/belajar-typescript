/* 
Generic sangat penting untuk membuat sebuah class yang memiliki tipe data yang dinamis 
Jika suatu tipe data harus memiliki data dinamis maka menggunakan tipe data Any akan sangat buruk
oleh karenanya Generic adalah solusi untuk masalah tersebut
*/
describe('Generic', () => { 
    class GenericData<T> {
         constructor(public data: T) {}
    }

    it('Should support Generic', () => {
        const numberValue = new GenericData<number>(1)
        const stringValue = new GenericData<string>('Reffan')
        console.info(numberValue, stringValue)
        expect(numberValue.data).toBe(1)
        expect(stringValue.data).toBe('Reffan')
    })
 })