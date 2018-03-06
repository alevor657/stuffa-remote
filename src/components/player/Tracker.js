import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Tracker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.songname}>Songname</Text>
                <Text style={styles.bpm}>BPM</Text>
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
