//singleton
//Object.create

const mySym = Symbol("key1")
// object literals
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
//console.log(JsUser.greeting()); //hello JS user
//console.log(JsUser.greetingTwo()); //Hello JS user,Hitesh