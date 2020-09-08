import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Teams = props => {
 return(
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
        alignContent: 'center',
    }
});

export default Teams;