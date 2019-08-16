import TabBarItem from "./TabBarItem"

export default class TabBar {
    constructor (options) {
        this.$el = document.createElement('div')
        this.$el.classList.add('tab-bar')
        this.app = options.app
        // this.list = list
        this.list = options.list
    }

    _generator () {
        // this.$list.push(new TabBarItem(this))

        this.list.forEach(item => {
            let tabBarItem = new TabBarItem({
                tabBar: this,
                data: item
            })
            tabBarItem.init()
        });
    }

    _render () {
        this.app.$el.appendChild(this.$el)
    }

    init () {
        console.log('123')
        this._generator()
        this._render()
    }
}