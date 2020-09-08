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
                <View>
                    <Text style={[generalStyle.text]}>{item.name}</Text>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        maxHeight: 167,
        backgroundColor: 'gray',
    }
});

export default players;