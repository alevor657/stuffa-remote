import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { SECONDARY_TEXT } from '../../../constants/colors';

const Heading = props => (
    <Text
        {...props}
        style={[styles.heading, props.style]}
    >
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontFamily: 'Roboto',
        color: SECONDARY_TEXT
    }
});

export default Heading;
