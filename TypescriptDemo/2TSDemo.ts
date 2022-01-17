let count: number = 1.2345
count = Number(count.toFixed(2))
console.log(typeof count.toFixed(2))

//  toFixed 之后 数字变为字符串

interface people {
    name: string
    age: number
}

const zhangsan: people = {
    name: '张三',
    age: 18
}

/*
总结：如果定义了静态类型，不仅意味着变量的类型不可以改变，
还意味着类型的
属性和方法也跟着确定了。
意味着程序的健壮性大大增加了
TSDemo2.ts
*/
