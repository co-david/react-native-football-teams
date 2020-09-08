import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { generalStyle } from '../utils/Styles';

const Name = props => {
 return(
     <View>
         <Text style={generalStyle.text}>{props.name}</Text>
     </View>
 );
};

const styles = StyleSheet.create({});

export default Name;