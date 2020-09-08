import { getTeamsFromApi, getTeamExtraInfoFromAPi } from '../api';

export const GET_TEAMS = 'GET_TEAMS';
export const GET_TEAM_INFO = 'GET_TEAM_INFO';
export const SET_LOADING = 'SET_LOADING';

export const getTeams = () => {
    console.log("enter to action");
    return (dispatch) => {
        dispatch({
            type: SET_LOADING,
            payload: true,
        })
        getTeamsFromApi().then(teams => {
            dispatch({
                type: GET_TEAMS,
                payload: teams,
            })
            dispatch({
                type: SET_LOADING,
                payload: false,
            })
        }).catch(err => {
            console.log(`Error: ${err} get teams`);
            alert(err);
        })
    }
}


export const getTeamInfo = (teamId) => {
    console.log("enter to getTeamInfo action");
    return (dispatch) => {
        dispatch({
            type: SET_LOADING,
            payload: true,
        })
        getTeamExtraInfoFromAPi(teamId).then(teamInfo => {
            console.log("Action team info:");
            console.log(teamInfo);
            dispatch({
                type: GET_TEAM_INFO,
                payload: {
                    teamId,
                    players: teamInfo.players,
                    matches: teamInfo.matches,
                }
            })
            dispatch({
                type: SET_LOADING,
                payload: false,
            })
        }).catch(err => {
            console.log(`Error: ${err} get team info`);
            alert(err);
        })
    }
}