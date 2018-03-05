import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Controls extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.controlWrap}>

                    <TouchableOpacity style={[styles.button, styles.first]}>
                        <Icon
                            name="replay"
                            size={40}
                            color='black'
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Icon
                            name="play-arrow"
                            size={60}
                            color='black'
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.last]}>
                        <Icon
                            name="navigate-next"
                            size={50}
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
        // flex: 0.5,
        height: '15%',
        backgroundColor: 'lightblue'
    },
    controlWrap: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'black'
    },
    first: {
        borderRightWidth: null
    },
    last: {
        borderLeftWidth: null,
    },
});

export default Controls;
