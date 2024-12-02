{
// let transaction = {
//     description: "Deposit",
//     amount: 2000,
//     date: new Date()
// }


// let transaction2 = {
//     description: "Deposit",
//     amount: 2000,
//     date: new Date()
// }

// interface TransactionInterface{
//     description:String,
//     amount:Number,
//     date:Date
// }


// type TransactionType = {
//     description?:String,
//     amount:Number,
//     date:Date
// }

// type TransactionType2 = {
//     description:String,
//     amount:Number
// }

// const t1: TransactionType = {
//     amount: 2000,
//     date: new Date(),
//     description: "Deposit"
// }

// const t2:TransactionType2 = t1

// const transaction:TransactionType = {
//     amount: 2000,
//     date: new Date(),
//     description: "Deposit"
// }

// const transaction2:TransactionType = {
//     amount: -500,
//     date: new Date(),
//     description: "Withdrawal"
// }

// console.log(transaction);


// const demoArray = []

// const numberArray: (number|string)[] = [12,'three']

// const transactions:TransactionType[] = [transaction,transaction2]
    
// console.log(transactions);



//--------------------------------------------------------------------------

    type User = {
        name:string,
        age:number,
        status:boolean
    }

    let user1:User = {
        name:"Vince",
        age:23,
        status:true
    }

    let user2:User = {
        name:"Tim",
        age:20,
        status:false
    }

    console.log(user1,user2)

    console.log(`age: ${user1.age}`);

    let userArray: User[] = [user1,user2]

    console.log(userArray[0])
    console.log(userArray[1])
    
    const user3 = {...user1}

    // const username = user3.name
    
    const {name: usernameee,status} = user3

    console.log(usernameee);
    
    

}
