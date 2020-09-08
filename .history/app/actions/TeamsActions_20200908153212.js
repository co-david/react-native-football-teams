import { getTeamsFromApi, getTeamExtraInfoFromAPi } from '../api';

export const GET_TEAMS = 'GET_TEAMS';
export const GET_TEAM_INFO = 'GET_TEAM_INFO';
export const SET_LOADING = 'SET_LOADING';

export const getTeams = () => {
    return (dispatch) => {
        getTeamsFromApi().then(teams => {
            dispatch({
                type: GET_TEAMS,
                payload: teams,
            })
        }).catch(err => {
            alert(err);
        })
    }
}

export const getTeamInfo = (teamId) => {
    return (dispatch) => {
        getTeamExtraInfoFromAPi(teamId).then(teamInfo => {
            dispatch({
                type: GET_TEAM_INFO,
                payload: {
                    teamId,
                    players: teamInfo.players,
                    matches: teamInfo.matches,
                }
            })
        }).catch(err => {
            alert(err);
        })
    }
}