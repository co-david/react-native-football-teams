import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { getTeams } from '../actions/TeamsActions';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { secondaryColor } from '../utils/Colors';
import { generalStyle } from '../utils/Styles';

const Team = props => {
    const teamId = props.id;
    const teams = useSelector(state => state.teams.teamsList);

    useEffect(() => {
        props.getTeams();
        console.log("prop teams:")
        console.log(teams);
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
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    row: {
        padding: 15,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
        marginTop: 10,
        backgroundColor: secondaryColor,
        opacity: 0.7,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        textAlign: 'center'
    }
});

const mapStateToProps = state => ({
    teams: state.teams.teamsList
});

export default connect(mapStateToProps, { getTeams })(Team);