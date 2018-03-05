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
                    <View style={[styles.button, styles.first]}>
                        <TouchableOpacity>
                            <Icon
                                name="replay"
                                size={50}
                                color='black'
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity>
                            <Icon
                                name="play-arrow"
                                size={50}
                                color='black'
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.button, styles.last]}>
                        <TouchableOpacity>
                            <Icon
                                name="navigate-next"
                                size={50}
                                color='black'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue'
    },
    controlWrap: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'white',
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
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
