import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { getTeams } from '../actions/TeamsActions';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Teams = props => {
    const teams = useSelector(state => state.teams.teamsList);

    useEffect(() => {
        props.getTeams();
        console.log("prop teams:")
        console.log(teams);
    }, []);

    return (
        <View style={styles.container}>
            <Text>I am a Teams</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const mapStateToProps = state => ({
        teams: state.teams.teamsList
});

export default connect(mapStateToProps, { getTeams })(Teams);