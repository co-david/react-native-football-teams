import { StyleSheet } from 'react-native';
import { secondaryFontColor } from './Colors';

export const generalStyle = StyleSheet.create({
    text: {
        fontSize: 18,
        color: secondaryFontColor,
    },
    mb20: {
        marginBottom: 20,
    },
    center: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    subTitle: {
        textDecorationLine: 'underline',
        marginBottom: 5,
    }
});