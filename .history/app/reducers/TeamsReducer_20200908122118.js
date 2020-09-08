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
            const teamsList = [].concat(state.teamsList);
            console.log(teamsList);
            const index = teamsList.findIndex(team => {
                // console.log("team.id: ", team.id);
                // console.log("action.payload.teamId: ", action.payload.teamId);
                return team.id === action.payload.teamId;
            });
            console.log("teamIndex: ", index);
            teamsList[index].players = action.payload.players;
            teamsList[index].matches = action.payload.matches;
            console.log(teamsList);
            return {
                ...state,
                teamsList: teamsList
            }
        default:
            return state;
    }
}

export default teamsReducer