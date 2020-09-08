const token = '6f52f2de4b244ac8af99ef5e464d40d4';
const baseUrl = 'https://api.football-data.org/v2/';

export const getTeams = () => {
    fetchData('teams').then(data => {
        console.log(data);
    }).catch(err => {
        console.log(`Error: ${err}`);
    })
}

export const getTeamPlayers = (teamId) => {
    fetchData(`teams/${teamId}`).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(`Error: ${err}`);
    })
}

export const getTeamUpcomingMatches = (teamId) => {
    fetchData(`teams/${teamId}/matches`).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(`Error: ${err}`);
    })
}

const fetchData = uri => {
    return fetch(baseUrl + uri, {
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
        return data;
    })
}