import React from 'react';
import { StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';


const Logo = props => {
    return (
        <SvgUri
            width={props.width !== undefined ? props.width : "100"}
            height={props.height !== undefined ? props.height : "100"}
            uri={props.uri}
        />
    );
};

const styles = StyleSheet.create({});

export default Logo;