import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

import { PRIMARY_TEXT, SECONDARY_LIGHT } from '../../constants/colors';

class BpmControls extends Component {
    constructor(props) {
        super(props);

        this.onMinus = this.onMinus.bind(this);
        this.onPlus = this.onPlus.bind(this);
    }

    onMinus() {

    }

    onPlus() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.controlWrap}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onMinus}
                    >
                        <Icon
                            name="minus"
                            size={40}
                            color={PRIMARY_TEXT}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.onPlus}
                    >
                        <Icon
                            name="plus"
                            size={40}
                            color={PRIMARY_TEXT}
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
        backgroundColor: SECONDARY_LIGHT
    },
});

function mapStateToProps(state, ownProps) {
    return {
        ws: state.connection.ws,
        bpm: state.player.bpm,
        ...ownProps
    };
}

export default connect(mapStateToProps)(BpmControls);
