function Complie(vm) {
    this.vm = vm
    this.$data = vm.$data
    this.$el = vm.$el
    this.init()
}

Complie.prototype = {
    init: function () {
        this.fragment = this.addAllEles(this.$el)
        this.complideNode(this.fragment)
        this.$el.appendChild(this.fragment)
    },
    addAllEles: function () {
        const fragment = document.createDocumentFragment()
        let child = this.$el.firstChild
        while (child) {
            fragment.appendChild(child)
            //  todo 把id=app 的子节点全部放进 文档里边
            child = this.$el.firstChild
        }
        return fragment
    },
    complideNode: function (fragment) {
        let childNodes = fragment.childNodes

        //  是否有 v-model
        ;[...childNodes].forEach((node) => {
            if (this.isElementNode(node)) {
                this.complie(node)
            }

            let reg = /\{\{(.*)\}\}/
            let text = node.textContent
            if (reg.test(text)) {
                //  如果 正则匹配到了 {{}} 就添加订阅
                // let prop
                console.log('reg.exec(text)', reg.test(text)) // todo 不懂不懂
                let prop = reg.exec(text)[1]
                this.complideText(node, prop)
            }

            //  编译子节点
            if (node.childNodes && node.childNodes.length) {
                this.complideNode(node)
            }
        })
    },
    complie: function (node) {
        let attrs = node.attributes
        ;[...attrs].forEach((attr) => {
            let name = attr.name
            if (this.isDirective(name)) {
                let value = attr.value
                if (name == 'v-model') {
                    this.complideModel(node, value)
                }
            }
        })
        console.log('node.value', node)
    },
    complideModel: function (node, prop) {
        let val = this.$data[prop]
        this.updateModel(node, val)
        new Watcher(this.vm, prop, (value) => {
            this.updateModel(node, value)
        })
        node.addEventListener('input', (e) => {
            let newValue = e.target.value
            if (val === newValue) return
            this.$data[prop] = newValue
        })
    },
    complideText: function (node, prop) {
        /*
            1 设置值
            2 添加订阅
        */
        let val = this.$data[prop]
        this.updateText(node, val)
        new Watcher(this.vm, prop, (value) => {
            this.updateText(node, value)
        })
    },
    updateModel(node, value) {
        node.value = typeof value == 'undefined' ? '' : value
    },
    updateText(node, value) {
        node.textContent = typeof value == 'undefined' ? '' : value
    },
    isElementNode: function (node) {
        return node.nodeType == 1
    },
    isDirective: function (attr) {
        return attr.indexOf('v-') != -1
    }
}

//// todo 咯咯咯咯咯
