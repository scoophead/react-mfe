{
    var t1 = {
        amount: 2000,
        date: new Date(),
        description: "Deposit"
    };
    var transaction = {
        amount: 2000,
        date: new Date(),
        description: "Deposit"
    };
    var transaction2 = {
        amount: -500,
        date: new Date(),
        description: "Withdrawal"
    };
    console.log(transaction);
    var demoArray = [];
    var numberArray = [12, 'three'];
    var transactions = [transaction, transaction2];
    console.log(transactions);
    var transactionArea = document.getElementById('transactions');
    console.log(transactionArea);
    var el1 = "<li>".concat(transaction.date, " ").concat(transaction.description, " ").concat(transaction.amount, "</li>");
    var el2 = "<li>".concat(transaction.date, " ").concat(transaction.description, " ").concat(transaction.amount, "</li>");
    var ul = "<ul>".concat(el1, " ").concat(el2, "</ul>");
    transactionArea.innerHTML = ul;
    var user1 = {
        name: "Vince",
        age: 23,
        status: true
    };
    var user2 = {
        name: "Tim",
        age: 20,
        status: false
    };
    var UserArea_1 = document.getElementById('users');
    function UserStatus(User) {
        if (User.status) {
            UserArea_1.innerHTML = "<span>USER: ".concat(User.name, "</span>");
        }
        else {
            UserArea_1.innerHTML = "<span>USER: User is not logged in</span>";
        }
    }
    UserStatus(user1);
    UserStatus(user2);
}
