'use strict'
exports.__esModule = true
// 基础类型 都是小写
var num = 1
var un = undefined
var sy = Symbol(1)
var nu = null
var str = 'stttr'
var bo = true
// 函数
//  参数类型必写，返回类型必写
function sub(a, b) {
    return a + b
}
// 无返回值
function vo(a, b) {
    a + b
}
// 无执行结果类型
// function ne(a:number, b:number): never {
//     while(true) {}
// }
// 参数解构形式
function jiegou(_a) {
    var a = _a.a,
        b = _a.b
    return a + b
}
jiegou({ a: 1, b: 2 })
// 数组类型定义
var numArr = [1, 2]
var numArrStr = [1, 2, 'str']
var objArr = [{ name: 'str', age: 18 }]
//  元组
//  和数组定义不同 常见用于csv格式
var yuan = ['str', 18, 'rty']
