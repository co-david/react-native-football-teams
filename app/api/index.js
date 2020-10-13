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

const getTeamPlayers = async (teamId) => {
    const response = await fetch(baseUrl + `teams/${teamId}`, {
        method: 'GET',
        headers: {
            'X-Auth-Token': token,
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200) {
        const data = await response.json();
        const players =  data.squad.filter(player => {
            return player.role.toLowerCase() === 'player'; 
        });
        return players;
    }
    else {
        throw new Error('Unable to fetch data');
    }
}

const getTeamUpcomingMatches = async (teamId) => {
    const response = await fetch(baseUrl + `teams/${teamId}/matches?status=SCHEDULED&limit=10`, {
        method: 'GET',
        headers: {
            'X-Auth-Token': token,
            'Content-Type': 'application/json'
        }
    });

    if (response.status === 200) {
        const data = await response.json();
        return data.matches;
    }
    else {
        throw new Error('Unable to fetch data');
    }
}

export const getTeamExtraInfoFromAPi = async (teamId) => {
    const teamPlayers = await getTeamPlayers(teamId);
    const teamMatches = await getTeamUpcomingMatches(teamId);
    return {
        players: teamPlayers,
        matches: teamMatches
    }
}