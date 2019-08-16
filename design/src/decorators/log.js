export default function (type) {
    return function (target, name, descriptor) {
        let oldValue = descriptor.value

        descriptor.value = function () {
            console.log(`${type} log update ...`)

            oldValue.apply(this, arguments)
        }
    }
}