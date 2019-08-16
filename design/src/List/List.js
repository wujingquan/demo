import { GET_LIST } from '../config'
import $ from 'jquery'
import createItem from '../Item/CreateItem'

export default class List {
    constructor(app) {
        this.app = app
        // this.$el = $('<div>')
        this.$el = document.createElement('div')
    }

    // 获取数据
    loadData () {
        return fetch(GET_LIST).then(result => {
            return result.json()
        })
    }
    
    // 生成列表
    initItemList (data) {
        data.forEach(itemData => {
            let item = createItem(this, itemData)
            item.init()
        });
    }
    
    render () {
        // this.app.$el.append(this.$el)
        console.log('12')
        this.app.$el.appendChild(this.$el)
    }
    
    init () {
        this.render()
        this.loadData().then(data => {
            this.initItemList(data)
        })
    }
}