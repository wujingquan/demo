export default class TabBarItem {
    // constructor
    constructor (options) {
        this.tabBar = options.tabBar
        this.data = options.data || { text: '' }
        this.view = options.view
        this.$el = document.createElement('div')
        this.$el.innerText = this.data.text

        this.$el.onclick = () => {
            this.view.$el.classList.remove('hide')
        }
    }

    _render () {
        this.tabBar.$el.appendChild(this.$el)
    }

    init () {
        this._render()
    }
}