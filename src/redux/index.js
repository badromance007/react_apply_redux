import {createStore} from "redux"

export function increment() {
    return {
        type: "INCREMENT"
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}

function reducer(count = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            console.log('hello + 1')
            return count + 1
        case "DECREMENT":
            console.log('hello - 1')
            return count - 1
        default:
            return count
    }
}

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store
