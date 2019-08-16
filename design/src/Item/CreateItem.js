import Item from './Item'

function createDiscount (item) {
    return new Proxy(item, {
        get (target, key, receiver) {
            console.log('receiver', receiver)
            if (key === 'name') {
                return `${target[key]}[折扣]`
            }
            if (key === 'price') {
                return target[key] * 0.8
            }
            return target[key]
        }
    })
}

export default function (list, itemData) {
    if (itemData.discount) {
        itemData = createDiscount(itemData)
    }
    return new Item(list, itemData)
}