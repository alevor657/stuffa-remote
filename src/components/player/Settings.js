import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import RoundIconButton from '../UI/Button/RoundIconButton';

class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <RoundIconButton
                        text='A'
                    />
                    <RoundIconButton
                        text='A'
                    />
                    <RoundIconButton
                        text='A'
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        // backgroundColor: 'white',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15
    }
});

export default Settings;
