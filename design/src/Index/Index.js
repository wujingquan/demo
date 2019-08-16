import View from '../View/View'
import { Instance } from '../decorators'

@Instance()
export default class Index extends View {
    constructor (options) {
        super(options)
    }
}