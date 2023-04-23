const InitialState = {
    counter: []
}


const counterReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'UPDATE_COUNTER':
            return {
                ...state,
                counter: action.payload
            }

        default: return state
    }
}

export default counterReducer;
