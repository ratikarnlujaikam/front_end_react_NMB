const x = [1,2,3]
const y = [4,5,6]
const z = [7,8,9]
x.push(y) //1,2,3,[4,5,6]
x.push(...z) //[1,2,3,[4,5,6],7,8,9]
console.log(x) //[1,2,3,[4,5,6]]
console.log(x[3]) //
console.log(x[3][0]) //4
console.log(x[4][2]) // 9