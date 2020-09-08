import React from 'react';
import { StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';


const logo = props => {
    return (
        <SvgUri
            width="100%"
            height="100%"
            uri={props.uri}
        />
    );
};

const styles = StyleSheet.create({});

export default logo;