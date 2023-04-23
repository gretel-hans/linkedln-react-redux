const InitialState = {
    profiles: []
}


const SaveAllProfilesReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'SAVE_ALL_PROFILES_INFO':
            return {
                ...state,
                profiles: action.payload
            }
        default: return state
    }
}

export default SaveAllProfilesReducer;
