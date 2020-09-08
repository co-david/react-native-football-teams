import { getTeamsFromApi } from '../api';

export const GET_TEAMS = 'GET_TEAMS';

export const getTeams = () => {
    console.log("enter to action");
    return (dispatch) => {
        getTeamsFromApi();
        dispatch({
            type: GET_TEAMS,
        })
    }
}