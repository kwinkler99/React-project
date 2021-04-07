import {LOG_IN, LOG_OUT, SEND_POLLS} from "../actions/actionTypes";

const initialState = {
    profile: {}
};


const profile = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                profile: {...state.profile, ...action.payload}
            }
        case LOG_OUT:
            return {
                ...state,
                profile: {}
            }
        default:
            return state;
    }
}

export default profile;