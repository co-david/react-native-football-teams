import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { getTeamInfo } from '../actions/TeamsActions';
import { View, Text, ScrollView, Platform, StyleSheet } from 'react-native';
import Name from '../components/Name';
import Logo from '../components/Logo';
import Players from '../components/Players';
import Matches from '../components/Matches';
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
    }, []);

    return (
        <ScrollView style={styles.container} nestedScrollEnabled={true}>
            <View style={generalStyle.center}>
                <View style={generalStyle.mb20}>
                    <Name name={team.name} />
                </View>
                <View style={generalStyle.mb20}>
                    <Logo style={generalStyle.mb10} uri={team.crestUrl} />
                </View>
            </View>
            <View style={generalStyle.mb20}>
                <Text style={[generalStyle.text, generalStyle.subTitle]}>Players:</Text>
                <Players players={team.players} />
            </View>
            <View>
                <Text style={[generalStyle.text, generalStyle.subTitle]}>Upcoming Matches:</Text>
                <Matches teamId={teamId} matches={team.matches} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // flexDirection: 'column',
        padding: 15,
        marginBottom: Platform.OS === 'ios' ? 50 :  25,
    },
});

const mapStateToProps = state => ({
    teams: state.teams.teamsList,
});

export default connect(mapStateToProps, { getTeamInfo })(Team);