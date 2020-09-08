import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Matches = props => {
    const teamId = props.teamId;

    const getRivalTeam = mactch => {
        let rivalTeamName = '';
        if(mactch.homeTeam.id === teamId) {
            rivalTeamName = mactch.awayTeam.name;
        } else {
            rivalTeamName = mactch.homeTeam.name;
        }

        return rivalTeamName;
    }

    const getDate = mactchDate => {
        const date = new Date(mactchDate);
        const utcDate = date.getUTCDate();

        return utcDate.getUTCFullYear() + '-' + utcDate.getUTCMonth() + '-' + utcDate.getUTCDay();
    }

    return (
        <FlatList
            data={props.matches}
            style={styles.list}
            showsVerticalScrollIndicator={true}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View>
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
    );
};

const styles = StyleSheet.create({});

export default Matches;