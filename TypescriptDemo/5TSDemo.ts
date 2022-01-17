function getTotal5(one: number, two: number) {
    return one + two + ''
}
const total = getTotal5(1, 2)
console.log(typeof total)

function getTotal51(one: number, two: number): number {
    return one + two
}
//  箭头函数写法
const getTotal52: () => number = () => {
    return 123
}

//  函数无返回值
function logFun(): void {
    console.log('我是void!')
}

const arrow5LogFunc: () => void = () => {
    console.log('我是箭头函数void!')
}

logFun()
arrow5LogFunc()

/*
总结：函数返回值不注解返回值类型的时候不报错
*/
