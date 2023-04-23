const InitialState = {
    experiences: []
}


const ExperiencesReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_TO_EXPERIENCES':
            return {
                ...state,
                experiences: action.payload
            }

        default: return state
    }
}

export default ExperiencesReducer;
