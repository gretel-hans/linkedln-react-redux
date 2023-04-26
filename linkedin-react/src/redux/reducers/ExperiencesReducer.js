const InitialState = {
    experiences: []
}


const ExperiencesReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD_TO_EXPERIENCES':
            return {
                ...state,
                experiences: action.payload.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
            }

        default: return state
    }
}

export default ExperiencesReducer;
