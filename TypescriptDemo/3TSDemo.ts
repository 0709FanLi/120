const obj1: {
    name: string
    age: number
} = {
    name: '张三',
    age: 18
}
console.log(obj1)

const arr3: string[] = ['a', 'b', 'c']
console.log(arr3)

// ???????
class Person3 {}
class Person333 {}

const obj3: Person3 = new Person333()
console.log(obj3)

const func3: () => string = () => {
    return 'a'
}
