export default class Index {
    constructor (options) {
        this.app = options.app

        this.$el = document.createElement('div')
        this.$el.innerText = '首页'
    }

    _render () {
        this.app.$el.appendChild(this.$el)
    }

    init () {
        this._render()
    }
}