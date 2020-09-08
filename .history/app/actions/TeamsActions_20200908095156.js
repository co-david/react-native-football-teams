import { getTeamsFromApi } from '../api';

export const GET_TEAMS = 'GET_TEAMS';

export const getTeams = () => {
    console.log("enter to action");
    return (dispatch) => {
        getTeamsFromApi().then(teams => {
            console.log("teams list:");
            console.log(teams);
            dispatch({
                type: GET_TEAMS,
            })
        }), (err) => {
            console.log(`Error: ${err}`)
            alert(err);
        }
    }
}