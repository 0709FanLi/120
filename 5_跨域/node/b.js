let express = require('express')
let app = express()
let whiteList = ['http://localhost:3002']
app.use(function (req, res, next) {
    let origin = req.headers.origin

    if (whiteList.includes(origin)) {
        // 设置哪个源可以访问
        res.setHeader('Access-Control-Allow-Origin', origin) // 允许携带哪个头访问我
        res.setHeader('Access-Control-Allow-Headers', 'name,Content-Type,X-Requested-With')
        //    允许携带cookie
        res.setHeader('Access-Control-Allow-Credentials', 'true') // 该次请求的请求方式
        res.setHeader('Access-Control-Allow-Methods', 'PUT') //预检测存活时间
        res.setHeader('Access-Control-Max-Age', 1800) // /允许前端获取哪个头
        res.setHeader('Access-Control-Expose-Headers', 'name') // option 预检请求 又是有请求 有时没有 表示这个请求是用来询问的
        if (req.method === 'OPTIONS') {
            res.end()
        }
    }
    next()
})

app.put('/getData', function (req, res) {
    console.log(req.headers)
    // res.setHeader('name','hello lee');
    res.end(`getData`)
})

app.get('/getData', function (req, res) {
    console.log(req.headers)
    res.end(`getData`)
})

app.use(express.static(__dirname))
app.listen(4000)
