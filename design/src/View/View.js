export default class View {
    constructor (options) {
        this.app = options.app
        
        this.$el = document.createElement('div')
        this.$el.classList.add('container', 'hide')
        this.$el.innerText = options.text
    }

    _render () {
        this.app.$el.appendChild(this.$el)
    }

    init () {
        this._render()
    }
}