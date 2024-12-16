/*
Always use watch command to run tests: npx tsc --watch
Cause Jest will compile to JavaScript, so the test most likely will succeed
with watch command, we will get an error if there's a syntax error
*/

describe('data-types', ():void => {
    //Primitive Data Types
    it("Should must declare", ():void => {
        const name:string = "Hello Reff"
        const age:number = 20
        const isMarried:boolean = true
        expect(name).toBe("Hello Reff");
        console.info(name, age, isMarried)
    })

    //Arrays
    it("Should must declare an array", ():void => {
        const names:string[] = ["Revvan", "Reffz"]
        const ages:number[] = [20, 21]
        const isMarried:boolean[] = [true, false]
        expect(names).toEqual(["Revvan", "Reffz"]);
        console.info(names, ages, isMarried)
    })

    //Readonly Arrays
    it("Should support Readonly Array", ():void => {
        const names:ReadonlyArray<string> = ["Revvan", "Reffz"]
        const ages:ReadonlyArray<number> = [20, 21]
        const isMarried:ReadonlyArray<boolean> = [true, false]
        // Dibawah ini akan error
        names[1] = "Reffan"
        ages[1] = 22
        isMarried[1] = true
        expect(names).toEqual(["Revvan", "Reffan"]);
        console.info(names, ages, isMarried)
    })

    //Tuple
    it("Should support Tuple", ():void => {
        const tuple:readonly [string, number, string] = ["Refan", 23, "Testing"]
        tuple[1] = 33
        expect(tuple).toEqual(["Refan", 33, "Testing"]);
        console.info(tuple)
    })


})