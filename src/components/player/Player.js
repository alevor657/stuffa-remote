import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Controls from './Controls';
import Settings from './Settings';
import Tracker from './Tracker';

class Player extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Tracker/>
                <Settings/>
                <Controls/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        width: '100%',
        justifyContent: 'space-between'
    }
});

export default Player;
