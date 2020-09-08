import React, {useEffect} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { generalStyle } from '../utils/Styles'

const players = props => {

useEffect(()=>{
    console.log(props)
}, [])

    return (
        <FlatList
            data={props.players}
            style={styles.list}
            showsVerticalScrollIndicator={true}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.row}>
                    <Text style={[generalStyle.text, styles.name]}>{item.name}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        maxHeight: 200,
        backgroundColor: '#fff',
    },
    row: {
        padding: 10,
        borderBottomColor: 'black', 
        borderBottomWidth: 1,
    },
    name: {
        textAlign: 'center',
    }
});

export default players;