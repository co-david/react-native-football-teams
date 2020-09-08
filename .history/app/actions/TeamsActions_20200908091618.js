import api from '../api';

export const GET_TEAMS = 'GET_TEAMS';

export const getTeams = () => {
    return (dispatch) => {
        api.getTeams();
        dispatch({
            type: GET_TEAMS,
        })
    }
}