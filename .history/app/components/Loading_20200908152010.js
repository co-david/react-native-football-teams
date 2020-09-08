import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { primaryColor } from '../utils/Colors';
import { generalStyle } from '../utils/Styles';

const Loading = props => {
    return (
        <View style={[generalStyle.center, styles.loading]}>
            <Text style={generalStyle.text}>Loading...</Text>
            <ActivityIndicator size="small" color={primaryColor} />
        </View>
    );
};

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default Loading;