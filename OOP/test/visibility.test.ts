describe('Visibility Private', () => {
    class Counter{
        private counter: number = 0;   
    
        increment(): void{
            this.counter++   
        }

        getCounter(): number{
            return this.counter
        }
    }

    it("should support private", () => {
        const counter = new Counter();
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
    })
})

describe('Visibility Protected', () => {
    class Counter{
        protected counter: number = 0;   
    
        increment(): void{
            this.counter++   
        }

        getCounter(): number{
            return this.counter
        }
    }

    class DoubleCounter extends Counter {
        public increment(): void {
            this.counter += 2
        }
    }

    it("should support Protected", () => {
        const doubleCounter = new DoubleCounter();
        doubleCounter.increment();
        doubleCounter.increment();
        console.info(doubleCounter.getCounter());
    })
})