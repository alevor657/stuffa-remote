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

                    <TouchableOpacity style={styles.button}>
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

                    <TouchableOpacity style={styles.button}>
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
        flex: 1,
        // height: '15%',
    },
    controlWrap: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Controls;
