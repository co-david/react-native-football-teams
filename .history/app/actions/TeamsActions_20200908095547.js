import { getTeamsFromApi } from '../api';

export const GET_TEAMS = 'GET_TEAMS';

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