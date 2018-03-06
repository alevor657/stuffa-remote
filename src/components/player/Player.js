import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Controls from './Controls';
import Settings from './Settings';
import Tracker from './Tracker';
import BpmControls from './BpmControls';

class Player extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Tracker/>
                <Settings/>
                <View style={styles.controlsWrap}>
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
    },
    controlsWrap: {
        flex: 0.75,
        justifyContent: 'center'
    }
});

export default Player;
