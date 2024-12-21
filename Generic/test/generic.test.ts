import { Employee } from './../../Dasar/src/Employee';
/* 
Generic sangat penting untuk membuat sebuah class yang memiliki tipe data yang dinamis 
Jika suatu tipe data harus memiliki data dinamis maka menggunakan tipe data Any akan sangat buruk
oleh karenanya Generic adalah solusi untuk masalah tersebut
*/

describe('Generic', () => { 
    class GenericData<T> {
         constructor(public data: T) {}
    }

    it('Should support Generic', () => {
        const numberValue = new GenericData<number>(1)
        const stringValue = new GenericData<string>('Reffan')
        console.info(numberValue, stringValue)
        expect(numberValue.data).toBe(1)
        expect(stringValue.data).toBe('Reffan')
    })

    class Entry<K, V> {
        constructor(public key: K, public value: V) {}
    }

    /* 
        Typescript dapat menggunakan lebih dari 1 generic type
    */
    it('Should support Multiple Generic Type', () => {
        const entry = new Entry<number, string>(1, "Manager")
        console.info(entry)
        expect(entry.key).toBe(1)
        expect(entry.value).toBe("Manager")
    })

    /* 
    Optional generic type, Typescript sudah mengerti tipe data apa yang dibutuhkan,
     sehingga tidak perlu secara eksplicit menyebutkan tipe datanya, selama dimasukkan ke dalam constructor
    */
    it('Should support Optional Generic Type', () => {
        const entry = new Entry(1, "Manager")
        console.info(entry)
        expect(entry.key).toBe(1)
        expect(entry.value).toBe("Manager")
    })

    /*
    Default Generic Parameter
    */
   class Hello<T = string> {
       constructor(public data: T) {}
   }

   it('Should support Default Generic Parameter', () => {
       const hello = new Hello<number>(1) // Type dapat diubah
       console.info(hello)
       expect(hello.data).toBe(1)

       const hello2 = new Hello("Reffan") //Jika tidak ditentukan, secara default hanya menerima string
       console.info(hello2)
       expect(hello2.data).toBe("Reffan")
   })
    
   /* Constraint Generic 
    Secara default Generic dapat memiliki tipe data apa saja, tapi jika ingin membatasi tipe data tertentu maka dapat menggunakan constraint generic
   */
   
    interface Employee{
        id: string
        name: string
        address?: string
        isEmployee?: boolean
    }

    interface Manager extends Employee {
        totalEmployee: number
    }

    interface VicePresident extends Manager {
        totalManager: number
    }

    class EmployeeData<T extends Employee>{
        constructor(public data: T) {}
    }

    it('Should support Constraint Generic', () => {
        const employee = new EmployeeData<Employee>({
            id: "1",
            name: "Reffan",
            isEmployee: true
        })
        const employee2 = new EmployeeData<Manager>({
            id: "1",
            name: "Aurora",
            isEmployee: true,
            totalEmployee: 10
        })

        // const employee3 = new EmployeeData<string>({}) //Error karena tidak sesuai dengan constraint
        // const employee4 = new EmployeeData<number>({}) //Error karena tidak sesuiai dengan constraint
    })

    /* Generic Promise */
    const fetchData = async(val: string): Promise<string> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(val === "Reff"){
                    resolve(`Halo ${val}`)
                } else {
                    reject("Error")
                }
            }, 1000)
        })
    }

    it('Should support Generic Promise', async () => {
        const res =  await fetchData("Reff")
        expect(res).toBe('Halo Reff')
        
        try{
            await fetchData("Reffan")
        } catch(e){
            expect(e).toBe("Error")
        }
    })

 })