import { GET_TEAMS, GET_TEAM_INFO, SET_LOADING } from '../actions/TeamsActions';

const initState = {
    teamsList: [],
    isLoading: false,
}
const teamsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_TEAMS:
            return {
                ...state,
                teamsList: action.payload,
            }
        case GET_TEAM_INFO:
            const teamsList = [].concat(state.teamsList);
            const index = teamsList.findIndex(team => {
                return team.id === action.payload.teamId;
            });
            teamsList[index].players = action.payload.players;
            teamsList[index].matches = action.payload.matches;

            return {
                ...state,
                teamsList: teamsList,
                isLoading: false,
            }
        case SET_LOADING: {
            console.log("enter to set loading!!!");
            return {
                ...state,
                isLoading: action.payload
            }
        }
        default:
            return state;
    }
}

export default teamsReducer