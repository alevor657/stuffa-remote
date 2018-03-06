import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class BpmControls extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.controlWrap}>

                    <TouchableOpacity style={styles.button}>
                        <Icon
                            name="minus"
                            size={40}
                            color='black'
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.last]}>
                        <Icon
                            name="plus"
                            size={40}
                            color='black'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        // height: '15%',
    },
    controlWrap: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(128, 128, 128, 0.5)'
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default BpmControls;
