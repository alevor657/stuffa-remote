import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_TEXT, SECONDARY } from '../../constants/colors';
import { connect } from 'react-redux';

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
                            color={PRIMARY_TEXT}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Icon
                            name="play-arrow"
                            size={60}
                            color={PRIMARY_TEXT}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Icon
                            name="navigate-next"
                            size={50}
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
        backgroundColor: SECONDARY
    },
});

function mapStateToProps(state, ownProps) {
    return {
        ws: state.connection.ws
    };
}

export default connect(mapStateToProps)(Controls);
