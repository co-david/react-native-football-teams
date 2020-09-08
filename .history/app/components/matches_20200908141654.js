import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { generalStyle } from '../utils/Styles'
import { secondaryColor } from '../utils/Colors'

const Matches = props => {
    const teamId = props.teamId;
    const isHaveMatches = props.matches !== undefined && props.matches.length > 0;

    const getRivalTeam = mactch => {
        let rivalTeamName = '';
        if (mactch.homeTeam.id === teamId) {
            rivalTeamName = mactch.awayTeam.name;
        } else {
            rivalTeamName = mactch.homeTeam.name;
        }

        return rivalTeamName;
    }

    const getDate = mactchDate => {
        const date = new Date(mactchDate);
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }

    return (
        <View>
        { isHaveMatches ?
                <FlatList
                    data={props.matches}
                    style={styles.list}
                    showsVerticalScrollIndicator={true}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.row}>
                            <View>
                                <Text style={[generalStyle.text]}>Competition: {item.competition.name}</Text>
                            </View>
                            <View>
                                <Text style={[generalStyle.text]}>Rival Team: {getRivalTeam(item)}</Text>
                            </View>
                            <View>
                                <Text style={[generalStyle.text]}>Date: {getDate(item.utcDate)}</Text>
                            </View>
                        </View>
                    )}
                />
                : <Text>Not have matches</Text>
        }
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        backgroundColor: secondaryColor,
    },
    row: {
        padding: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
});

export default Matches;