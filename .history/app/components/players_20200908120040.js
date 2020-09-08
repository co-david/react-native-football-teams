import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const players = props => {
 return(
     <View>
         <Text>Players:</Text>
         <FlatList
                data={props.players}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Text style={[generalStyle.text]}>{item.name}</Text>
                    </View>
                )}
            />
     </View>
 );
};

const styles = StyleSheet.create({});

export default players;