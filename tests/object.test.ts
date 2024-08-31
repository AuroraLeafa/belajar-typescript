describe('Object', () => { 
    it('Should must declare', () => {
        const user: { id: string, name: string, hobby?: string } = {
            id: "1",
            name: "Reff",
            hobby: "Coding"
        };

        console.info(user)
        
        user.id = "2"
        user.name = "Reffan"

        console.info(user)
    })
})
