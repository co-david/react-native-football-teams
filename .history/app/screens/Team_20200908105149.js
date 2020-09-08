import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { getTeams } from '../actions/TeamsActions';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { secondaryColor } from '../utils/Colors';
import { generalStyle } from '../utils/Styles';

const Team = props => {
    const teamId = props.route.params.id;

    useEffect(() => {
        console.log("Team id: ", teamId);
    }, []);

    return (
        <View style={styles.container}>
            <Text>Team Screen</Text>
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

// const mapStateToProps = state => ({
//     teams: state.teams.teamsList
// });

export default Team;