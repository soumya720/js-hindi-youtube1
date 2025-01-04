// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudary"
        }
    }
}
   // console.log(regularUser.fullname.userfullname);

    //console.log(tinderUser);
    const obj1 = {1: "a",2: "b"}
    const obj2 = {3: "a", 4: "b"}
    const obj4 = {5:"a", 6: "b"}
    //const obj3 = {obj1,obj2}

//const obj3 = Object.assign({},obj1, obj2,obj4)
//console.log(obj3);
const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

users[1].email
//console.log(tinderUser); //{ id: '123abc', name: 'Sammy', isLoggedIn: false }
//console.log(Object.keys(tinderUser));  //[ 'id', 'name', 'isLoggedIn' ]
 //console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]
//console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
//console.log(tinderUser.hasOwnProperty('isLogged')); //false

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"hitesh"
}
//course.courseInstructor
//const {courseInstructor} = course
const {courseInstructor: instructor} = course
//console.log(courseInstructor);  //hitesh
//console.log(instructor); //hitesh
const navbar = () => {}

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }