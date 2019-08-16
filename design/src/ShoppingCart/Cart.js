import log from '../decorators/log'

export default class Cart {
    constructor (time) {
        // if (Cart.instance && new.target === Cart) throw new Error('class Carl is aready instance !')
        if (Cart.instance && new.target === Cart) return Cart.instance 
        this.time = time
        this.list = []

        Cart.instance = this
    }

    @log('add')
    add (data) {
        this.list.push(data)
    }

    @log('del')
    del (id) {
        this.list = this.list.filter(item => {
            if (item.id === id) {
                return false
            }
            return true
        })
    }

    getList () {
        return this.list.map(item => {
            return item.name
        }).join('\n')
    }
}

// let getCart = (function () {
//     let cart
//     return function () {
//         if (!cart) {
//             cart = new Cart()
//         }
//         return cart
//     }
// })()

// export default getCart