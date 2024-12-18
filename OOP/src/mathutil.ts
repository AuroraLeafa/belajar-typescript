export namespace MathUtil {
    export function sum(...values: number[]): number{
        let total = 0;
        for(const value of values){
            total += value;
        }
        return total
    }

    export const PI = 3.14;
}