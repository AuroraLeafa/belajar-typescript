describe('Error Handling', () => { 
    class ValidationError extends Error {
        constructor(message: string) {
          super(message);
          this.name = 'ValidationError';
        }
      }

      const doubleIt = (value: number) => {
          if(value < 0) throw new ValidationError('Value must be greater than 0')
          return value * 2
      }
      
      it('should support error handling', () => {
        try{
            const result = doubleIt(-1)
            console.info(result)
        } catch (e) {
            if(e instanceof ValidationError){
                console.info(e.message)
            }
        }
      })
 })