
const InitialState = {
    me: []
}


const SaveMyInfoReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SAVE_MY_INFO':
            return {
                ...state,
                me: action.payload
            }
        default: return state
    }
}

export default SaveMyInfoReducer;



// 1) state
// 2) REDUCER
// 3) ACTION --> DISPATCH


