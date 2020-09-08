import { GET_TEAMS } from '../actions/TeamsActions';

const teamsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TEAMS:  
        console.log(action.payload);
            return {
                ...state,
                teamsList: action.payload
            }
        default:
            return state;
    }
}

export default teamsReducer