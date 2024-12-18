describe('Static', () => { 
    class Configuration {
        static NAME: string = "TYPESCRIPT I MUST"
        static VERSION: number = 1.0;
        static AUTHOR: string = "Reff";
     }

     class MathUtil{
        static sum(...values: number[]): number{
            let total = 0;
            for(const value of values){
                total += value;
            }
            return total
        }
     }

     it('Should support static', () => {
         expect(Configuration.NAME).toBe("TYPESCRIPT I MUST")
         expect(Configuration.VERSION).toBe(1.0)
         expect(Configuration.AUTHOR).toBe("Reff")
     })

     it('Should support static method', () => {
         expect(MathUtil.sum(1, 2, 3, 4, 5)).toBe(15)
     })
 })