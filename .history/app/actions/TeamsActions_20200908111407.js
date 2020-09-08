import { getTeamsFromApi, getTeamExtraInfoFromAPi } from '../api';

export const GET_TEAMS = 'GET_TEAMS';
export const GET_TEAM_INFO = 'GET_TEAM_INFO';

export const getTeams = () => {
    console.log("enter to action");
    return (dispatch) => {
        getTeamsFromApi().then(teams => {
            dispatch({
                type: GET_TEAMS,
                payload: teams,
            })
        }).catch(err => {
            console.log(`Error: ${err} get teams`);
            alert(err);
        })
    }
}


export const getTeamInfo = (teamId) => {
    console.log("enter to action");
    return (dispatch) => {
        getTeamExtraInfoFromAPi(teamId).then(teamInfo => {
            console.log("Action team info:");
            console.log(teamInfo);
            dispatch({
                type: GET_TEAM_INFO,
                payload: teamInfo,
            })
        }).catch(err => {
            console.log(`Error: ${err} get team info`);
            alert(err);
        })
    }
}