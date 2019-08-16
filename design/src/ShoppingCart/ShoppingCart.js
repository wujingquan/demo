import Cart from './Cart'

export default class ShoppingCart {
    constructor (app) {
        this.app = app
        this.$el = document.createElement('div')
        this.$el.style = 'padding-bottom: 10px; border-bottom: 1px solid #ccc;'
        this.cart = new Cart(Date.now())
    }

    showCart () {
        alert(this.cart.getList())
    }

    initBtn () {
        let $btn = document.createElement('button')
        $btn.innerText = '购物车'
        $btn.onclick = () => {
            this.showCart()
        }
        this.$el.appendChild($btn)
    }

    render () {
        this.app.$el.appendChild(this.$el)
    }

    init () {
        this.initBtn()
        this.render()
    }
}