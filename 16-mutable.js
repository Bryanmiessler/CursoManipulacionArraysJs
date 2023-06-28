// Método push
const array = [1,2,3]
array.push(4,5)
console.log(array) // [ 1, 2, 3, 4, 5 ]

// Método unshift

const array2 = [3,4,5]
array2.unshift(1,2)
console.log(array2) // [ 1, 2, 3, 4, 5 ]

// Método pop

const array3 = [1,2,3,4]
const lastElement = array3.pop()
console.log(lastElement) // 4
console.log(array3) // [ 1, 2, 3 ]

// Método shift

const array4 = [1,2,3,4]
const firstElement = array4.shift()
console.log(firstElement) // 1
console.log(array4) // [ 2, 3, 4 ]

// Método splice

const array5 = [1,2,3,4]
const elements2 = array5.splice(2,1,"tres")
console.log(elements2) // [3]
console.log(array5) // [ 1, 2, 'tres', 4 ]

const array6 = [1,2,3,4]
const elements3 = array6.splice(1,2,"dos", "tres")
console.log(elements2) // [ 2, 3 ]
console.log(array6) // [ 1, 'dos', 'tres', 4 ]