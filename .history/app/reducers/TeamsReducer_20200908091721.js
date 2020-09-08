import { GET_TEAMS } from '../actions/TeamsActions';

const teamsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TEAMS:  
            return {
                ...state,
                // categoriesList: action.payload
            }
        default:
            return state;
    }
}

export default teamsReducer