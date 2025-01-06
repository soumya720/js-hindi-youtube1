//if
//const isUserloggedIn = true
//const tempreture = 41
//if (tempreture === 40){
    //console.log("less than 50");
//}else{
   // console.log("tempretrure is greter than 50");
//}
//console.log("50")

// <, >,<=,>=,==,===,!==

// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000
//if(balance > 500) console.log("test"),console.log("test2");

// if(balance < 500){
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) 
    {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail || guestUser){
    console.log("User logged in");
}