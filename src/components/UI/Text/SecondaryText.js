import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { SECONDARY_TEXT } from '../../../constants/colors';

const SecondaryText = props => (
    <Text
        {...props}
        style={[styles.secondaryText, props.style]}
    >
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    secondaryText: {
        fontSize: 16,
        lineHeight: 16,
        fontFamily: 'Roboto',
        color: SECONDARY_TEXT
    }
});

export default SecondaryText;
