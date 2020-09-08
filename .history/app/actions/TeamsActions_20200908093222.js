import api from '../api';

export const GET_TEAMS = 'GET_TEAMS';

export const getTeams = () => {
    console.log("enter to action");
    return (dispatch) => {
        api.getTeams();
        dispatch({
            type: GET_TEAMS,
        })
    }
}