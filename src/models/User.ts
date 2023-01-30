export class User{
    // private id: string
    // private name: string
    // private email: string
    // private password: string


    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private createdAt: string
    ){
        // this.id = id
        // this.name = name,
        // this.email = email
        // this.password = password
    }

    public getId():string{
        return this.id 
    }

    public setId(newId: string):void{
        this.id = newId
    }

    public getName(){
        return this.name
    }

    public setName(newName: string):void{
        this.name = newName
    }

    public getEmail(){
        return this.email
    }

    public setEmail(newEmail: string):void{
        this.email = newEmail
    }

    public getPassword(){
        return this.password
    }

    public setPassword(newPassword: string): void{
        this.password = newPassword
    }

    public getCreatedAt(){
        return this.createdAt
    }

    public setCreatedAt(newCreatedAt: string):void{
        this.createdAt = newCreatedAt
    }
}


const user1 = new User ("u001", "Ana", "ana@gmail.com", "ana123", "2023-01-30-T10:00:00")


console.log(user1.getId())
// console.log(user1.id) // erro porque ta privado


// user1.id = "01" // erro porque o encapsulamento está privado
user1.setId("01")

const Ana = user1.getName

