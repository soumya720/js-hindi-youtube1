// const coding = ["js", "ruby", "java", "python", "cpp"]
// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values);

//const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums);

// const newNums = []
// myNums.forEach((num)=>{
//     if (num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    {title: 'Book Two', genre: 'Friction', publish: 1981,edition: 1982},
    {title: 'Book One', genre: 'Non-Friction', publish: 1981,edition: 2024},
    {title: 'Book Five', genre: 'History', publish: 1981,edition: 2021},
    {title: 'Book Ten', genre: 'Non-Friction', publish: 1981,edition: 2010},
    {title: 'Book Ninty', genre: 'Science', publish: 1981,edition: 2009},
    {title: 'Book Six', genre: 'Friction', publish: 1981,edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1981,edition: 2007},
    {title: 'Book Four', genre: 'Science', publish: 1981,edition: 2006},
    {title: 'Book Zero', genre: 'History', publish: 1981,edition: 2005},
    {title: 'Book Minus', genre: 'Friction', publish: 1981,edition: 2004},
    
]

let userBooks = books.filter((bk) =>bk.genre === 'History')
userBooks = books.filter( (bk) => {return bk.publish >= 1981 && bk.genre === "History"})
console.log(userBooks);
