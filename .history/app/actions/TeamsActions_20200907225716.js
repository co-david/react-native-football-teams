export const GET_TEAMS = 'GET_TEAMS';

export const getTeams = () => {
    return (dispatch) => {
        dispatch({
            type: GET_TEAMS,
        })
    }
}