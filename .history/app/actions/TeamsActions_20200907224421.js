export const GET_TEAMS = 'GET_TEAMS';

const getTeams = () => {
    return (dispatch) => {
        dispatch({
            type: GET_TEAMS,
        })
    }
}