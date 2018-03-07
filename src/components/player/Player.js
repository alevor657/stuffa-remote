import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Controls from './Controls';
import Settings from './Settings';
import Tracker from './Tracker';
import BpmControls from './BpmControls';
import { PRIMARY, PRIMARY_LIGHT } from '../../constants/colors';

class Player extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.trackerContainer}>
                    <Tracker />
                </View>

                <View style={styles.settingsContainer}>
                    <Settings />
                </View>

                <View style={styles.controlsContainer}>
                    <BpmControls />
                    <Controls />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        // backgroundColor: '#212121',
        backgroundColor: '#F5F5F6'

    },
    controlsContainer: {
        flex: 0.75,
        justifyContent: 'center',
    },
    trackerContainer: {
        flex: 1,
        backgroundColor: PRIMARY
    },
    settingsContainer: {
        flex: 1,
        backgroundColor: PRIMARY
    }
});

export default Player;
