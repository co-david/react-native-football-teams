import { GET_TEAMS, GET_TEAM_INFO } from '../actions/TeamsActions';

const teamsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_TEAMS:
            return {
                ...state,
                teamsList: action.payload
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
                teamsList: teamsList
            }
        default:
            return state;
    }
}

export default teamsReducer