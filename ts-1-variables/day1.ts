{
    console.log("JavaScript!!!")
    // alert("UH OHH")
    
    const balance:number = 100
    console.log(typeof balance)
    
    let mutableBalance:number = 1000
    mutableBalance = 20000

    console.log(mutableBalance)
    
    let deposit: number = Number(prompt('deposit amount'))
    
    mutableBalance += deposit
    
    console.log('new balance is', mutableBalance)
}
