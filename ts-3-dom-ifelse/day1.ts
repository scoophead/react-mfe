{


type TransactionType = {
    description?:String,
    amount:Number,
    date:Date
}

type TransactionType2 = {
    description:String,
    amount:Number
}

const t1: TransactionType = {
    amount: 2000,
    date: new Date(),
    description: "Deposit"
}


const transaction:TransactionType = {
    amount: 2000,
    date: new Date(),
    description: "Deposit"
}

const transaction2:TransactionType = {
    amount: -500,
    date: new Date(),
    description: "Withdrawal"
}

console.log(transaction);


const demoArray = []

const numberArray: (number|string)[] = [12,'three']

const transactions:TransactionType[] = [transaction,transaction2]
    
console.log(transactions);

const transactionArea:HTMLDivElement =document.getElementById('transactions') as HTMLDivElement

console.log(transactionArea);

const el1= `<li>${transaction.date} ${transaction.description} ${transaction.amount}</li>`
const el2= `<li>${transaction.date} ${transaction.description} ${transaction.amount}</li>`
const ul= `<ul>${el1} ${el2}</ul>`

transactionArea.innerHTML = ul  


//-------------------------------------------

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

const UserArea:HTMLHeadingElement = document.getElementById('users') as HTMLHeadingElement


function UserStatus(User): void{

    if(User.status){
        UserArea.innerHTML = `<span>USER: ${User.name}</span>`
        
    } else {
    
        UserArea.innerHTML = `<span>USER: User is not logged in</span>`
    
    }

}


UserStatus(user1)
UserStatus(user2)


}