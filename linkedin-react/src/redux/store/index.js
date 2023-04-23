import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SaveMyInfoReducer from "../reducers/SaveMyInfoReducer";
import ExperiencesReducer from "../reducers/ExperiencesReducer";
import ProfilesReducer from "../reducers/ProfilesReducer";
import SavePost from "../reducers/SavePost";
import HomePageMyInfoReducer from "../reducers/HomePageMyInfoReducer";
import counterReducer from "../reducers/counterReducer";
import SaveMyCommentReducer from "../reducers/SaveMyComment";


const store = configureStore({
    reducer: combineReducers({
        userInfo: SaveMyInfoReducer,
        experiences: ExperiencesReducer,
        profiles: ProfilesReducer,
        post: SavePost,
        myInfo:HomePageMyInfoReducer,
        counter:counterReducer,
        comment:SaveMyCommentReducer
    })
})

export default store;