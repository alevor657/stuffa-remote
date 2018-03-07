import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Heading from '../UI/Text/Heading';
import PrimaryText from '../UI/Text/PrimaryText';

class Tracker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Heading style={styles.songname}>Songname</Heading>
                <PrimaryText style={styles.bpm}>BPM</PrimaryText>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    songname: {
        fontSize: 30,
        marginBottom: 25
    },
    bpm: {
        fontWeight: 'bold'
    }
});

export default Tracker;
