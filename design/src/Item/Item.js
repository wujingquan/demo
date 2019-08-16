import $ from 'jquery'
import StateMachine from 'javascript-state-machine'
import Cart from '../ShoppingCart/Cart'

export default class Item {
    constructor (list, data) {
        this.list = list
        this.data = data
        // this.$el = $('<div>')
        this.$el = document.createElement('div')
        this.cart = new Cart(Date.now())
        console.log(this.cart)
    }

    initContent () {
        let $el = this.$el
        let data = this.data
        // $el.append($(`<p>名称：${data.name}</p>`))
        // $el.append($(`<p>价格：${data.price}</p>`))
        let str = `<p>名称：${data.name}</p><p>价格：${data.price}</p>`
        $el.innerHTML = str
    }

    initBtn () {
        let $el = this.$el
        let $btn = document.createElement('button')
        let fsm = new StateMachine({
            init: '加入购物车',
            transitions: [
                {
                    name: 'addToCart', 
                    from: '加入购物车',
                    to: '从购物车删除'
                },
                {
                    name: 'deleteFromCart',
                    from: '从购物车删除',
                    to: '加入购物车'
                }
            ],
            methods: {
                // 加入购物车
                onAddToCart: () => {
                    this.addToCartHandle()
                    updateText()
                },
                // 删除
                onDeleteFromCart: () => {
                    this.deleteFromCartHandle()
                    updateText()
                }
            }
        })

        function updateText() {
            $btn.innerText = fsm.state
        }

        $btn.onclick = () => {
            if (fsm.is('加入购物车')) {
                fsm.addToCart()
            } else {
                fsm.deleteFromCart()
            }
        }

        updateText()
        // $el.append($btn)
        $el.appendChild($btn)
    }

    addToCartHandle () {
        this.cart.add(this.data)
    }

    deleteFromCartHandle () {
        this.cart.del(this.data.id)
    }

    render () {
        this.list.$el.appendChild(this.$el)
    }
    
    init () {
        this.initContent()
        this.initBtn()
        this.render()
    }
}