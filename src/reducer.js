const initialSate = {
    count: 0
}

const reducer = (state = initialSate, action) => {
    switch(action.type){
        case "INCREMENT":
            return state+1

        case "DECREMENT":
            return state-1

        default:
            console.log(state)
            return state.count
    }
}

export default reducer