function sayHello(person: string) {
    return 'Hello,' + person
}

let user: string = 'Tom'
console.log(sayHello(user))
let num: number = undefined

//  任意值
let myFavoriteNumber: any = 'seven'
myFavoriteNumber = 7 //  Type 'number' is not assignable to type 'string'.
//  当值类型为any时 不会报错

//  类型推论
let num1 = 'seven'
num1 = 7
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.

// 等价于
let num1: string = 'seven'
num1 = 7

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
//  不会报错
let num1
num1 = 'seven'
num1 = 7
