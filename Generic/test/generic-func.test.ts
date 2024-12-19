describe('Generic Function', () => { 
    function create<T>(data: T): T {
        return data
    }
    it('Should support Generic Function', () => {
        const numberValue = create<number>(1)
        const stringValue = create<string>('Reffan')
        console.info(numberValue, stringValue)
        expect(numberValue).toBe(1)
        expect(stringValue).toBe('Reffan')
    })
 })