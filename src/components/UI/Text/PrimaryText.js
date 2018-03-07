import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { PRIMARY_TEXT } from '../../../constants/colors';

const PrimaryText = props => (
    <Text
        {...props}
        style={[styles.primaryText, props.style]}
    >
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    primaryText: {
        fontSize: 16,
        fontFamily: 'Roboto',
        color: PRIMARY_TEXT
    }
});

export default PrimaryText;
