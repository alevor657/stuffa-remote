import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

import Heading from '../UI/Text/Heading';
import PrimaryText from '../UI/Text/PrimaryText';
import SecondaryText from '../UI/Text/SecondaryText';
import SoundLevel from './SoundLevel';
import { COLORED } from '../../constants/colors';
import { setSound } from '../../actions/playerActions'; 

class Tracker extends Component {
    constructor(props) {
        super(props);
    }

    onSwipe(dir, gesture) {
        if (dir !== swipeDirections.SWIPE_LEFT && dir !== swipeDirections.SWIPE_RIGHT) {
            return;
        }

        let width = Dimensions.get('window').width,
            dx = gesture.dx,
            currentLevel = this.props.soundLevel;

        // negative or pos percentage of movement
        let step = dx / width * 100 / 2;

        console.log('RES1', step);        
        // round so that step is a factor of 5
        let temp = step % 5;
        temp && (step = step - temp + 5);
        console.log('RES2', step);

        let result = currentLevel + step;

        (result < 0) && (result = 0);
        (result > 100) && (result = 100);
        console.log('CURRENT', currentLevel);
        console.log('RESULT', result);
    }

    render() {
        let { bpm, song, artist, soundLevel } = this.props;

        return (
            <GestureRecognizer
                onSwipe={(dir, state) => this.onSwipe(dir, state)}
                style={styles.container}
                config={{ velocityThreshold: 0 }}
            >
                <SoundLevel
                    style={styles.soundBar}
                    level={soundLevel}
                />                                        
                <Heading style={styles.songname}>{song}</Heading>
                <SecondaryText>{artist}</SecondaryText>
                <PrimaryText style={styles.bpm}>{parseInt(bpm) ? '' : bpm}</PrimaryText>
            </GestureRecognizer>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    songname: {
        fontSize: 30,
        marginBottom: 25
    },
    bpm: {
        fontWeight: 'bold'
    },
    soundBar: {
        alignSelf: 'flex-start',
        backgroundColor: COLORED
    }
});

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        ...state.player
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setSound: bindActionCreators(setSound, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracker);
