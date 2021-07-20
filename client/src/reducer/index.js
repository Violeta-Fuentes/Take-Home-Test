import { SHOW_COMMITS } from "../actions";

const initialState = {
    commitsHistory : []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW_COMMITS :
            return {
                ...state,
                commitsHistory: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer