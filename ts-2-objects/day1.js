var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
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
    console.log(user1, user2);
    console.log("age: ".concat(user1.age));
    var userArray = [user1, user2];
    console.log(userArray[0]);
    console.log(userArray[1]);
    var user3 = __assign({}, user1);
    // const username = user3.name
    var usernameee = user3.name, status_1 = user3.status;
    console.log(usernameee);
}
