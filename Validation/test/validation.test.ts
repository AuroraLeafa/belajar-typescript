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

    it('Should support data conversion', () => {
        const schema = z.object({
            name: z.coerce.string().min(3).max(100),
            email: z.coerce.string().email(),
            age: z.coerce.number().min(0).max(100),
            isMarried: z.coerce.boolean()
        })
        
        const req = {
            name: "Aurora",
            email: "email@example.com",
            age: "20",
            isMarried: "true" // schema menyebutkan boolean tapi dapat menerima string karena method coerce
        }

        const res = schema.parse(req)
        expect(res.name).toBe("Aurora");
        expect(res.email).toBe("email@example.com");
        expect(res.age).toBe(20); //tetap menerima number karena telah dikonversi
        expect(res.isMarried).toBe(true); //tetap menerima boolean karena telah dikonversi
    })

    it('should support Date Validation', () => {
        const dateSchema = z.coerce.date().min(new Date("2023-01-01")).max(new Date("2024-12-31"))
        const birthDate = dateSchema.parse("2023-01-21")
        const birthDate2 = dateSchema.parse(new Date(2023, 0, 17))

        console.log(birthDate);
        console.log(birthDate2);
        
    })

    it('should support Error Validation', () => {
        const schema = z.string().min(3).max(100).email()
        const req = "Aurora@mail.com"
        // const req = "Aurora" 
        const res = schema.safeParse(req)
        if (res.success) {
            console.log(res.data);
        } else {
            console.error(res.error);
        }
    })

    it('Should support nested object validation', () => {
        const schema = z.object({
            name: z.string().min(3).max(100),
            email: z.string().email(),
            age: z.number().min(0).max(100),
            isMarried: z.boolean(),
            address: z.object({
                street: z.string(),
                city: z.string(),
                country: z.string()
            })
        })

        const req = {
            name: "Aurora",
            email: "email@example.com",
            age: 20,
            isMarried: true,
            address: {
                street: "Jl. A",
                city: "Bandung",
                country: "Indonesia"
            }
        }
        const res = schema.parse(req)
        expect(res.address.street).toBe("Jl. A");
        console.log(res);
        
    })

    it('Should can validate object with custom message', () => {
        const loginSchema = z.object({
            username: z.string().email("Username harus Email"),
            password: z.string().min(6,"Password minimal 6 karakter").max(20,"Password maksimal 20 karakter")
        })

        const req = {
            username: "email@example.com",
            password: "1234" //salah
        }

        const res = loginSchema.safeParse(req)
        console.log(res.error?.message);
    })

    it('Should can support optional validation', () => {
        const schema = z.object({
            firstName : z.string().max(50),
            lastName : z.string().max(50).optional(),
            email : z.string().email()
        })
        const req = {
            firstName : "Aurora",
            email : "email@example.com"
        }
        const res = schema.parse(req)
        console.log(res);
    })

    it('Should can support transform validate date', () => {
        const schema = z.string().email().transform((data) => data.toUpperCase())
        const res = schema.parse("email@example.com")
        console.log(res);
    })
})