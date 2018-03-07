import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { PRIMARY_TEXT, SECONDARY } from '../../../constants/colors';
import PrimaryText from '../Text/PrimaryText';


const RoundIconButton = props => (
    <TouchableOpacity
        style={[styles.roundIconButton, props.style]}
    >
        {props.icon ? (
            props.icon
        ) : (
            <PrimaryText style={styles.text}>{props.text}</PrimaryText>
        )}
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    roundIconButton: {
        borderRadius: 50,
        backgroundColor: SECONDARY,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    text: {
        fontSize: 30,
        fontWeight: '100'
    }
});

export default RoundIconButton;
