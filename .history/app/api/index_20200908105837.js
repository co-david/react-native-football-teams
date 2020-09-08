const token = '6f52f2de4b244ac8af99ef5e464d40d4';
const baseUrl = 'https://api.football-data.org/v2/';

export const getTeamsFromApi = async () => {
    const response = await fetch(baseUrl + 'teams', {
        method: 'GET',
        headers: {
            'X-Auth-Token': token,
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200) {
        const data = await response.json();
        return data.teams;
    }
    else {
        throw new Error('Unable to fetch data');
    }
}

export const getTeamPlayers = (teamId) => {
    return fetch(baseUrl + `teams/${teamId}`, {
        method: 'GET',
        headers: {
            'X-Auth-Token': token,
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch data');
        }
    }).then(data => {
        return data.teams;
    })
}

export const getTeamUpcomingMatches = (teamId) => {
    return fetch(baseUrl + `teams/${teamId}/matches`, {
        method: 'GET',
        headers: {
            'X-Auth-Token': token,
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch data');
        }
    }).then(data => {
        return data.teams;
    })
}

export const getTeamExtraInfo = teamId => {

}