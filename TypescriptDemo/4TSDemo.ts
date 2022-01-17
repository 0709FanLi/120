const name4 = '张三'

//  工作中使用问题

// 1. 如果 TS 能够自动分析变量类型，我们就什么也不需要做了
const num = 1
const num2 = 2
const num3 = num + num2

// 2. 如果 TS 不能够自动分析变量类型，我们就需要进行类型注解
function getTotal4(num: number, num2: number) {
    return num + num2
}
// total4 是可以推断出来，所以不需要加类型注解
const total4 = getTotal4(1, 2)
console.log(total4)

const people4 = {
    name: '张三',
    age: 18
}
//  鼠标放到people4的时候会自动出现 people4的类型
//  推断出来了就不需要类型注解

/*
总结：写TS的时候每个属性 每个变量都应该是固定类型的
如果能推断出就不需要注解，
如果不能推断出就需要注解
*/
