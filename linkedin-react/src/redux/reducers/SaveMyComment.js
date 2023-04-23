const InitialState = {
    comment:''
}


const SaveMyCommentReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SAVE_COMMENT':
            return {
                ...state,
                comment: action.payload
            }

        default: return state
    }
}

export default SaveMyCommentReducer;