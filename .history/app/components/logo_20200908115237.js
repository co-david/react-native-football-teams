import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';


const Logo = props => {
useEffect(() => {
    console.log(props);
}, []);

    return (
        <SvgUri
            width="20"
            height="20"
            uri={props.uri}
        />
    );
};

const styles = StyleSheet.create({});

export default Logo;