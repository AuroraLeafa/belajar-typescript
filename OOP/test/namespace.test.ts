import { MathUtil } from "../src/mathutil"

describe('Namespace Test', () => { 
    it('Should support namespace', () => {
        expect(MathUtil.sum(1, 2, 3, 4, 5)).toBe(15)
        expect(MathUtil.PI).toBe(3.14)
    })
 })