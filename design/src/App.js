import $ from 'jquery'
import List from './List/List.js'
import ShoppingCart from './ShoppingCart/ShoppingCart'
import TabBar from './TabBar'

import Index from './Index/Index'
import Classify from './Classify/Classify'
import Cart from './Cart/Cart'
import My from './My/My'

export default class App {
    constructor(id) {
        this.$el = document.getElementById(id)
    }

    init() {
        this.initIndex()
        this.initClassify()
        this.initCart()
        this.initMy()
        
        this.initShoppingCart()
        this.initList()
        this.initTabBar()
    }
}