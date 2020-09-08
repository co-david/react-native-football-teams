import React from 'react';
import { connect } from 'react-redux';
import { getTeams } from '../actions/TeamsActions';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Teams = props => {
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

const mapStateToProps = (state) => ({
    teams: state.teams.teams
})

const mapDispatchToProps =  ({
    getTeams: getTeams
})

export default connect(mapStateToProps, mapDispatchToProps)(Teams);