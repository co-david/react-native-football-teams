const token = '6f52f2de4b244ac8af99ef5e464d40d4';
const baseUrl = 'https://api.football-data.org/v2/';

export const getTeams = () => {
   
}

export const getTeamPlayers = () => {
    fetchData('teams').then(data => {
        console.log(data);
    }).catch(err => {
        console.log(`Error: ${err}`);
    })
}

export const getTeamUpcomingMatches = () => {
    
}

const fetchData = uri => {
    return fetch(baseUrl + uri).then(response => {
        if(response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch data');
        }
    }).then(data => {
        return data;
    })
}