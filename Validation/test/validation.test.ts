import { z } from "zod"

// Zod Documentation : https://zod.dev/

describe('Validation Testing', () => { 
    it('Should support validation', () => {
        const schema = z.string().min(3).max(100)
        
        const req = "Aurora"
        const res = schema.parse(req)

        expect(res).toBe("Aurora");
    })

    it('Should support primitive data type validation', () => {
        const schema = z.object({
            name: z.string().min(3).max(100),
            email: z.string().email(),
            age: z.number().min(0).max(100),
            isMarried: z.boolean()
        })
        
        const req = {
            name: "Aurora",
            email: "email@example.com",
            age: 20,
            isMarried: true
        }

        const res = schema.parse(req)

        expect(res.name).toBe("Aurora");
        expect(res.email).toBe("email@example.com");
        expect(res.age).toBe(20);
        expect(res.isMarried).toBe(true);
    })
})