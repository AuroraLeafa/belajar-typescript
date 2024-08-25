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
    it("Should must declare", ():void => {
        const names:string[] = ["Revvan", "Reffz"]
        const ages:number[] = [20, 21]
        const isMarried:boolean[] = [true, false]
        expect(names).toEqual(["Revvan", "Reffz"]);
        console.info(names, ages, isMarried)
    })
})