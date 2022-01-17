import { Agent } from 'http'

// 基础类型 都是小写
let num: number = 1
let un: undefined = undefined
let sy: symbol = Symbol(1)
let nu: null = null
let str: string = 'stttr'
let bo: boolean = true

// 函数
//  参数类型必写，返回类型必写
function sub(a: number, b: number): number {
    return a + b
}

// 无返回值
function vo(a: number, b: number): void {
    a + b
}

// 无执行结果类型
// function ne(a:number, b:number): never {
//     while(true) {}
// }

// 参数解构形式
function jiegou({ a, b }: { a: number; b: number }): number {
    return a + b
}
jiegou({ a: 1, b: 2 })

// 数组类型定义
const numArr: number[] = [1, 2]
const numArrStr: (number | string)[] = [1, 2, 'str']
const objArr: { name: string; age: number }[] = [{ name: 'str', age: 18 }]

type lady = {
    name: string
    age: number
}

//  元组
//  和数组定义不同 常见用于csv格式
const yuan: [string, number, string] = ['str', 18, 'rty']
