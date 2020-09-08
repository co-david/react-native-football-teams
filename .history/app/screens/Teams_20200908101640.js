import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { getTeams } from '../actions/TeamsActions';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { generalStyle } from '../utils/Styles';

const Teams = props => {
    const teams = useSelector(state => state.teams.teamsList);

    useEffect(() => {
        props.getTeams();
        console.log("prop teams:")
        console.log(teams);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={teams}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity>
                            <Text style={generalStyle.text}>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
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
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
        marginTop: 10,
        // backgroundColor: secondaryColor,
        opacity: 0.7,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
    }
});

const mapStateToProps = state => ({
    teams: state.teams.teamsList
});

export default connect(mapStateToProps, { getTeams })(Teams);