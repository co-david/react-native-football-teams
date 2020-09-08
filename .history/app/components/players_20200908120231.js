import React, {useEffect} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { generalStyle } from '../utils/Styles'

const players = props => {

useEffect(()=>{
    console.log(props)
}, [])

    return (
        <View>
            <Text>Players:</Text>
            <FlatList
                data={props.players}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text style={[generalStyle.text]}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default players;