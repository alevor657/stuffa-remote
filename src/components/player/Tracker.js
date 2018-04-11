import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Heading from '../UI/Text/Heading';
import PrimaryText from '../UI/Text/PrimaryText';
import SecondaryText from '../UI/Text/SecondaryText';

class Tracker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { bpm, song, artist } = this.props;

        return (
            <View style={styles.container}>
                <Heading style={styles.songname}>{song}</Heading>
                <SecondaryText>{artist}</SecondaryText>
                <PrimaryText style={styles.bpm}>{parseInt(bpm) ? '' : bpm}</PrimaryText>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    songname: {
        fontSize: 30,
        marginBottom: 25
    },
    bpm: {
        fontWeight: 'bold'
    }
});

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        ...state.player
    };
}

export default connect(mapStateToProps)(Tracker);
