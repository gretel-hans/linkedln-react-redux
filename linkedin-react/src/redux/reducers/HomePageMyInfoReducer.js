
const InitialState = {
    myInfo: []
}


const HomePageMyInfoReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'HOMEPAGE_SAVE_MY_INFO':
            return {
                ...state,
                myInfo: action.payload
            }
        default: return state
    }
}

export default HomePageMyInfoReducer;