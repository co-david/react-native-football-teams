import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { getTeamInfo } from '../actions/TeamsActions';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Name from '../components/Name';
import Logo from '../components/Logo';
import Players from '../components/Players';
import Matches from '../components/Matches';


import { secondaryColor } from '../utils/Colors';
import { generalStyle } from '../utils/Styles';

const Team = props => {
    const teams = useSelector(state => state.teams.teamsList);
    const teamId = props.route.params.id;
    const team = teams.find(team => {
        return team.id === teamId;
    })

    useEffect(() => {
        if (team.players === undefined) {
            props.getTeamInfo(teamId);
        }
        console.log("Team id: ", teamId);
        console.log(team);
    }, []);

    return (
        <View style={styles.container}>
            <Name name={team.name} />
            <Logo uri={team.crestUrl} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const mapStateToProps = state => ({
    teams: state.teams.teamsList
});

export default connect(mapStateToProps, { getTeamInfo })(Team);