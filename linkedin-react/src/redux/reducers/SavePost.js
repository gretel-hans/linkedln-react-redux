
const InitialState = {
    post: []
}


const SavePost = (state = InitialState, action) => {
    switch (action.type) {
        case 'SAVE_POST':
            return {
                ...state,
                post: action.payload
            }
        default: return state
    }
}

export default SavePost;