import { GET_TEAMS, GET_TEAM_INFO } from '../actions/TeamsActions';

const teamsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TEAMS:
            return {
                ...state,
                teamsList: action.payload
            }

        case GET_TEAM_INFO:
            console.log("Info reducer");
            console.log(action.payload);
            return {
                ...state,
                // teamsList: action.payload
            }
        default:
            return state;
    }
}

export default teamsReducer